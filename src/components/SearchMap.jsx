import React from 'react'
import {Checkbox} from 'semantic-ui-react'

const SearchMap = () => {
    return (
        <>
            <div className="ui vertical menu">
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
                        <Checkbox className="item" label='Pre-colonial (Before 1630)' defaultChecked />
                        <Checkbox className="item" label='Colonial (1630 - 1763)' defaultChecked />
                        <Checkbox className="item" label='Revolutionary (1763 - 1783)' defaultChecked />
                        <Checkbox className="item" label='Young Republic (1783 - 1815)' defaultChecked />
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
                
            </div>
        </>
    )
}

export default SearchMap;