import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import '../css/AddressField.css';

const AddressField = ({onChange}) => {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        requestOptions: {
          /* Define search scope here */
        },
        debounce: 300,
      });
    //   const ref = useOnclickOutside(() => {
    //     // When user clicks outside of the component, we can dismiss
    //     // the searched suggestions by calling this method
    //     clearSuggestions();
    //   });
    
      const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
      };
    
      const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        onChange(description);
        clearSuggestions();
    
        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log("📍 Coordinates: ", { lat, lng });
          })
          .catch((error) => {
            console.log("😱 Error: ", error);
          });
      };
    
      const renderSuggestions = () =>
        data.map((suggestion) => {
          const {
            id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
          return (
            <li key={id} onClick={handleSelect(suggestion)}>
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
            );
        });

    return(
        <div className='inputAddress'>
            <label className='address' htmlFor='address'>Adresse</label>
            <input 
                className='address' 
                value={value} 
                onChange={handleInput} 
                disabled={!ready} 
                name='address' 
                placeholder='55 Rue du Faubourg Saint-Honoré, 75008, Paris, France'/>
            {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
    )
}

export default AddressField;