import React from 'react'
import {Checkbox, Search, Accordion, Menu, Button} from 'semantic-ui-react'
import { useState } from 'react'

const SearchMap = (props) => {
    const [typeActive, setTypeActive] = useState(false)
    const [stateActive, setStateActive] = useState(false)
    const [periodActive, setPeriodActive] = useState(false)

    const setStateVals = (e) => {
        if(!props.states.includes(e.target.id)){
            props.setStateFilter([...props.states, e.target.id])
        } else {
            props.setStateFilter(props.states.filter(state => state != e.target.id))
        }
    }

    const setTypeVals = (e) => {
        if(!props.types.includes(e.target.id)){
            props.setTypeFilter([...props.types, e.target.id])
        } else {
            props.setTypeFilter(props.types.filter(type => type != e.target.id))
        }
    }

    const handleAccordion = (e) => {
        console.log(e.target)
        if(e.target.id === "type-menu"){
            setTypeActive(!typeActive);
        } else if (e.target.id === "state-menu"){
            setStateActive(!stateActive);
        } else if (e.target.id === "period-menu"){
            setPeriodActive(!periodActive);
        }
    }

    return (
        <>
            <Accordion as={Menu} vertical style={{width: '100%'}}>
                <div className="item" style={{backgroundColor: 'black'}}>
                    <h3 style={{color:"white"}}>Search/ Filter Map</h3>
                </div>

                <div className="item">
                    <div className="ui search" style={{width: '100%'}}>
                        <Search 
                           placeholder="Search..."
                        />
                    </div>
                </div>

                <Menu.Item>
                    <Accordion.Title
                        id="type-menu"
                        active={typeActive}
                        content='Location Type'
                        onClick={handleAccordion}
                    />
                    <Accordion.Content 
                        active={typeActive}
                        content ={
                            <div className="menu">
                                <Checkbox className="item" label='National Historic Landmark' defaultChecked id='nhl' onChange={setTypeVals} />
                                <Checkbox className="item" label='Historic Events' defaultChecked id='events' onChange={setTypeVals}/>
                                <div className="item"><Button size='mini'>Reset</Button></div>
                            </div>
                        }
                    />
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        id="period-menu"
                        active={periodActive}
                        content='Time Period'
                        onClick={handleAccordion}
                    />
                    <Accordion.Content 
                        active={periodActive}
                        content ={
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
                            <div className="item"><Button size='mini'>Reset</Button></div>
                        </div>
                        }
                    />
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        id="state-menu"
                        active={stateActive}
                        content='State'
                        onClick={handleAccordion}
                    />
                    <Accordion.Content 
                        active={stateActive}
                        content ={
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
                                <div className="item"><Button size='mini'>Reset</Button></div>
                            </div>
                        }
                    />
                </Menu.Item>
                
            </Accordion>
        </>
    )
}

export default SearchMap;