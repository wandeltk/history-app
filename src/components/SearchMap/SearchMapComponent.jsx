import React from 'react'
import {Checkbox} from 'semantic-ui-react'
import './SearchMap.css'

const SearchMap = () => {
    return (
        <>
            <div className="ui vertical menu" style={{width: '100%'}}>
                <div className="item">
                    <div className="ui input"><input type="text" placeholder="Search..." /></div>
                </div>
                <div className="item">
                    Location Type
                    <div className="menu">
                        <Checkbox className="item" label='National Historic Landmark' defaultChecked />
                    </div>

                </div>
                <div className="item">
                    Time Period
                    <div className="menu">
                        <Checkbox className="item check" label='Pre-colonial (Before 1630)'defaultChecked />
                        <Checkbox className="item check" label='Colonial (1630 - 1763)' defaultChecked />
                        <Checkbox className="item check" label='Revolutionary (1763 - 1783)' defaultChecked />
                        <Checkbox className="item check" label='Young Republic (1783 - 1815)' defaultChecked />
                        <Checkbox className="item" label='Expansion (1815 - 1860)' defaultChecked />
                        <Checkbox className="item" label='Civil War (1830 - 1876' defaultChecked />
                        <Checkbox className="item" label='Industrial Revolution (1871 - 1920)' defaultChecked />
                        <Checkbox className="item" label='WWI/Great Depression (1914 - 1933)' defaultChecked />
                        <Checkbox className="item" label='WWII (1933 - 1945)' defaultChecked />
                        <Checkbox className="item" label='Postwar (1945 - 1960)' defaultChecked />
                        <Checkbox className="item" label='Vietnam Era (1960 - 1980)' defaultChecked />
                        <Checkbox className="item" label='Turn of the Century (1980 - 2000)' defaultChecked />
                        <Checkbox className="item" label='Modern (2000 - today)' defaultChecked />
                    </div>
                </div>
                <div className="item">
                    State
                    <div className="menu">
                        <Checkbox className="item" label='Alabama' defaultChecked />
                        <Checkbox className="item" label='Alaska' defaultChecked />
                        <Checkbox className="item" label='Arizona' defaultChecked />
                        <Checkbox className="item" label='Arkansas' defaultChecked />
                        <Checkbox className="item" label='California' defaultChecked />
                        <Checkbox className="item" label='Colorado' defaultChecked />
                        <Checkbox className="item" label='Connecticuit' defaultChecked />
                        <Checkbox className="item" label='Delaware' defaultChecked />
                        <Checkbox className="item" label='Florida' defaultChecked />
                        <Checkbox className="item" label='Georgia' defaultChecked />
                        <Checkbox className="item" label='Hawaii' defaultChecked />
                        <Checkbox className="item" label='Idaho' defaultChecked />
                        <Checkbox className="item" label='Illinois' defaultChecked />
                        <Checkbox className="item" label='Indiana' defaultChecked />
                        <Checkbox className="item" label='Iowa' defaultChecked />
                        <Checkbox className="item" label='Kansas' defaultChecked />
                        <Checkbox className="item" label='Kentucky' defaultChecked />
                        <Checkbox className="item" label='Louisiana' defaultChecked />
                        <Checkbox className="item" label='Maine' defaultChecked />
                        <Checkbox className="item" label='Maryland' defaultChecked />
                        <Checkbox className="item" label='Massachusetts' defaultChecked />
                        <Checkbox className="item" label='Michigan' defaultChecked />
                        <Checkbox className="item" label='Minnesota' defaultChecked />
                        <Checkbox className="item" label='Mississippi' defaultChecked />
                        <Checkbox className="item" label='Missouri' defaultChecked />
                        <Checkbox className="item" label='Montana' defaultChecked />
                        <Checkbox className="item" label='Nebraska' defaultChecked />
                        <Checkbox className="item" label='Nevada' defaultChecked />
                        <Checkbox className="item" label='New Hampshire' defaultChecked />
                        <Checkbox className="item" label='New Jersey' defaultChecked />
                        <Checkbox className="item" label='New Mexico' defaultChecked />
                        <Checkbox className="item" label='New York' defaultChecked />
                        <Checkbox className="item" label='North Carolina' defaultChecked />
                        <Checkbox className="item" label='North Dakota' defaultChecked />
                        <Checkbox className="item" label='Ohio' defaultChecked />
                        <Checkbox className="item" label='Oklahoma' defaultChecked />
                        <Checkbox className="item" label='Oregon' defaultChecked />
                        <Checkbox className="item" label='Pennsylvania' defaultChecked />
                        <Checkbox className="item" label='Rhode Island' defaultChecked />
                        <Checkbox className="item" label='South Carolina' defaultChecked />
                        <Checkbox className="item" label='South Dakota' defaultChecked />
                        <Checkbox className="item" label='Tennessee' defaultChecked />
                        <Checkbox className="item" label='Texas' defaultChecked />
                        <Checkbox className="item" label='Utah' defaultChecked />
                        <Checkbox className="item" label='Vermont' defaultChecked />
                        <Checkbox className="item" label='Virginia' defaultChecked />
                        <Checkbox className="item" label='Washington' defaultChecked />
                        <Checkbox className="item" label='West Virginia' defaultChecked />
                        <Checkbox className="item" label='Wisconsin' defaultChecked />
                        <Checkbox className="item" label='Wyoming' defaultChecked />

                    </div>

                </div>
                
            </div>
        </>
    )
}

export default SearchMap;