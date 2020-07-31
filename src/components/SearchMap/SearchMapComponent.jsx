import React from 'react'
import {Checkbox} from 'semantic-ui-react'

const SearchMap = (props) => {
    console.log(props.states)

    const setStateVals = (e) => {
        if(!props.states.includes(e.target.id)){
            props.setStateFilter([...props.states, e.target.id])
        } else {
            props.setStateFilter(props.states.filter(state => state != e.target.id))
        }
    }


    return (
        <>
            <div className="ui vertical menu" style={{width: '100%'}}>
                <div className="item">
                    <div className="ui input"><input type="text" placeholder="Search..." /></div>
                </div>
                <div className="item">
                    Location Type
                    <div className="menu">
                        <Checkbox className="item" label='National Historic Landmark' />
                        <Checkbox className="item" label='Historic Events' />
                    </div>

                </div>

                {(props.types.length != 0)?
                    <div className="item">
                        Time Period
                        <div className="menu">
                            <Checkbox className="item" label='Pre-colonial (Before 1630)'/>
                            <Checkbox className="item" label='Colonial (1630 - 1763)' />
                            <Checkbox className="item" label='Revolutionary (1763 - 1783)' />
                            <Checkbox className="item" label='Young Republic (1783 - 1815)' />
                            <Checkbox className="item" label='Expansion (1815 - 1860)' />
                            <Checkbox className="item" label='Civil War (1830 - 1876' />
                            <Checkbox className="item" label='Industrial Revolution (1871 - 1920)' />
                            <Checkbox className="item" label='WWI/Great Depression (1914 - 1933)' />
                            <Checkbox className="item" label='WWII (1933 - 1945)' />
                            <Checkbox className="item" label='Postwar (1945 - 1960)'  />
                            <Checkbox className="item" label='Vietnam Era (1960 - 1980)'  />
                            <Checkbox className="item" label='Turn of the Century (1980 - 2000)'  />
                            <Checkbox className="item" label='Modern (2000 - today)'  />
                        </div>
                    </div>:
                    <></>
                }
                <div className="item">
                    State
                    <div className="menu">
                        <Checkbox className="item" label='Alabama' id='Alabama' onChange={setStateVals}/>
                        <Checkbox className="item" label='Alaska' id='Alaska' onChange={setStateVals}/>
                        <Checkbox className="item" label='Arizona'id='Arizona' onChange={setStateVals} />
                        <Checkbox className="item" label='Arkansas'id='Arkansas' onChange={setStateVals} />
                        <Checkbox className="item" label='California'id='California' onChange={setStateVals} />
                        <Checkbox className="item" label='Colorado'id='Colorado' onChange={setStateVals} />
                        <Checkbox className="item" label='Connecticut'id='Connecticut' onChange={setStateVals} />
                        <Checkbox className="item" label='Delaware'id='Delaware' onChange={setStateVals} />
                        <Checkbox className="item" label='Florida'id='Florida' onChange={setStateVals} />
                        <Checkbox className="item" label='Georgia'id='Georgia' onChange={setStateVals} />
                        <Checkbox className="item" label='Hawaii'id='Hawaii' onChange={setStateVals} />
                        <Checkbox className="item" label='Idaho'id='Idaho' onChange={setStateVals} />
                        <Checkbox className="item" label='Illinois'id='Illinois' onChange={setStateVals} />
                        <Checkbox className="item" label='Indiana'id='Indiana' onChange={setStateVals} />
                        <Checkbox className="item" label='Iowa'id='Iowa' onChange={setStateVals} />
                        <Checkbox className="item" label='Kansas'id='Kansas' onChange={setStateVals} />
                        <Checkbox className="item" label='Kentucky'id='Kentucky' onChange={setStateVals} />
                        <Checkbox className="item" label='Louisiana'id='Lousiana' onChange={setStateVals} />
                        <Checkbox className="item" label='Maine' id='Maine' onChange={setStateVals}/>
                        <Checkbox className="item" label='Maryland' id='Maryland' onChange={setStateVals}/>
                        <Checkbox className="item" label='Massachusetts'id='Massachusetts' onChange={setStateVals} />
                        <Checkbox className="item" label='Michigan'id='Michigan' onChange={setStateVals} />
                        <Checkbox className="item" label='Minnesota' id='Minnesota' onChange={setStateVals}/>
                        <Checkbox className="item" label='Mississippi' id='Mississippi' onChange={setStateVals}/>
                        <Checkbox className="item" label='Missouri'id='Missouri' onChange={setStateVals} />
                        <Checkbox className="item" label='Montana' id='Montana' onChange={setStateVals}/>
                        <Checkbox className="item" label='Nebraska' id='Nebraska' onChange={setStateVals}/>
                        <Checkbox className="item" label='Nevada' id='Nevada' onChange={setStateVals}/>
                        <Checkbox className="item" label='New Hampshire' id='New Hampshire' onChange={setStateVals}/>
                        <Checkbox className="item" label='New Jersey' id='New Jersey' onChange={setStateVals}/>
                        <Checkbox className="item" label='New Mexico' id='New Mexico' onChange={setStateVals}/>
                        <Checkbox className="item" label='New York' id='New York' onChange={setStateVals}/>
                        <Checkbox className="item" label='North Carolina' id='North Carolina' onChange={setStateVals}/>
                        <Checkbox className="item" label='North Dakota'id='North Dakota' onChange={setStateVals} />
                        <Checkbox className="item" label='Ohio' id='Ohio' onChange={setStateVals}/>
                        <Checkbox className="item" label='Oklahoma' id='Oklahoma' onChange={setStateVals}/>
                        <Checkbox className="item" label='Oregon' id='Oregon' onChange={setStateVals}/>
                        <Checkbox className="item" label='Pennsylvania' id='Pennsylvania' onChange={setStateVals}/>
                        <Checkbox className="item" label='Rhode Island' id='Rhode Island' onChange={setStateVals}/>
                        <Checkbox className="item" label='South Carolina' id='South Carolina' onChange={setStateVals}/>
                        <Checkbox className="item" label='South Dakota' id='South Dakota' onChange={setStateVals}/>
                        <Checkbox className="item" label='Tennessee' id='Tennessee' onChange={setStateVals}/>
                        <Checkbox className="item" label='Texas' id='Texas' onChange={setStateVals}/>
                        <Checkbox className="item" label='Utah' id='Utah' onChange={setStateVals}/>
                        <Checkbox className="item" label='Vermont' id='Vermont' onChange={setStateVals}/>
                        <Checkbox className="item" label='Virginia' id='Virginia' onChange={setStateVals}/>
                        <Checkbox className="item" label='Washington' id='Washington' onChange={setStateVals}/>
                        <Checkbox className="item" label='West Virginia' id='West Virginia' onChange={setStateVals}/>
                        <Checkbox className="item" label='Wisconsin' id='Wisconsin' onChange={setStateVals}/>
                        <Checkbox className="item" label='Wyoming' id='Wyoming' onChange={setStateVals}/>

                    </div>

                </div>
                
            </div>
        </>
    )
}

export default SearchMap;