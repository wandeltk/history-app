const states = [

        {   text: 'Alabama',
        value: 'Alabama',
        center_lat: '32.7794',
        center_long: '-86.8287'},

        {   text: 'Alaska',
        value: 'Alaska',
        center_lat: '60.0685',
        center_long: '-152.2782'},

        {   text: 'Arizona',
        value: 'Arizona',
        center_lat: '34.2744',
        center_long: '-111.6602'},

        {   text: 'Arkansas',
        center_lat: '37.1841',
        value: 'Arkansas',
        center_long: '-92.4426'},

        {   text: 'California',
        value: 'California',
        center_lat: '37.1841',
        center_long: '-119.4696'},

        {   text: 'Colorado',
        value: 'Colorado',
        center_lat: '38.9972',
        center_long: '-105.5478'},

        {   text: 'Connecticut',
        value: 'Connecticut',
        center_lat: '41.6219',
        center_long: '-72.7273'},

        {   text: 'Deleware',
        value: 'Deleware',
        center_lat: '38.9896',
        center_long: '-75.5050'},

        {   text: 'Florida',
        value: 'Florida',
        center_lat: '28.6305',
        center_long: '-82.4497'},

        {   text: 'Georgia',
        value: 'Georgia',
        center_lat: '32.6415',
        center_long: '-83.4426'},

        {   text: 'Hawaii',
        value: 'Hawaii',
        center_lat: '20.2927',
        center_long: '-156.3737'},

        {   text: 'Idaho',
        value: 'Idaho',
        center_lat: '44.3509',
        center_long: '-114.6130'},

        {   text: 'Illinois',
        value: 'Illinois',
        center_lat: '40.0417',
        center_long: '-89.1965'},

        {   text: 'Indiana',
        value: 'Indiana',
        center_lat: '39.8942',
        center_long: '-86.2816'},

        {   text: 'Iowa',
        value: 'Iowa',
        center_lat: '42.0751',
        center_long: '-93.4960'},

        {   text: 'Kansas',
        value: 'Kansas',
        center_lat: '38.4937',
        center_long: '-98.3804'},

        {   text: 'Kentucky',
        value: 'Kentucky',
        center_lat: '37.5347',
        center_long: '-85.3021'},

        {   text: 'Lousiana',
        value: 'Lousiana',
        center_lat: '31.0689',
        center_long: '-91.9968'},

        {   text: 'Maine',
        value: 'Maine',
        center_lat: '45.3695',
        center_long: '-69.2428'},

        {   text: 'Maryland',
        value: 'Maryland',
        center_lat: '39.0550',
        center_long: '-76.7909'},

        {   text: 'Massachusetts',
        value: 'Massachusetts',
        center_lat: '42.2596',
        center_long: '-71.8083'},

        {   text: 'Michigan',
        value: 'Michigan',
        center_lat: '44.3467',
        center_long: '-85.4102'},

        {   text: 'Minnesota',
        value: 'Minnesota',
        center_lat: '46.2807',
        center_long: '-94.3053'},

        {   text: 'Mississippi',
        value: 'Mississippi',
        center_lat: '32.7364',
        center_long: '-89.6678'},

        {   text: 'Missouri',
        value: 'Missouri',
        center_lat: '38.3566',
        center_long: '-92.4580'},

        {   text: 'Montana',
        value: 'Montana',
        center_lat: '47.0527',
        center_long: '-109.6333'},
        
        {   text: 'Nebraska',
        value: 'Nebraska',
        center_lat: '41.5378',
        center_long: '-99.7951'},

        {   text: 'Nevada',
        value: 'Nevada',
        center_lat: '39.3289',
        center_long: '-116.6312'},

        {   text: 'New Hampshire',
        value: 'New Hampshire',
        center_lat: '43.6805',
        center_long: '-71.5811'},

        {   text: 'New Jersey',
        value: 'New Jersey',
        center_lat: '40.1907',
        center_long: '-74.6728'},

        {   text: 'New Mexico',
        value: 'New Mexico',
        center_lat: '34.4071',
        center_long: '-106.1126'},

        {   text: 'New York',
        value: 'New York',
        center_lat: '42.9538',
        center_long: '-75.5268'},

        {   text: 'North Carolina',
        value: 'North Carolina',
        center_lat: '35.5557',
        center_long: '-79.3877'},

        {   text: 'North Dakota',
        value: 'North Dakota',
        center_lat: '47.4501',
        center_long: '-100.4659'},

        {   text: 'Ohio',
        value: 'Ohio',
        center_lat: '40.2862',
        center_long: '-82.7937'},

        {   text: 'Oklahoma',
        value: 'Oklahoma',
        center_lat: '35.5889',
        center_long: '-97.4943'},

        {   text: 'Oregon',
        value: 'Oregon',
        center_lat: '43.9336',
        center_long: '-120.5583'},

        {   text: 'Pennsylvania',
        value: 'Pennsylvania',
        center_lat: '40.2862',
        center_long: '-77.7996'},

        {   text: 'Rhode Island',
        value: 'Rhode Island',
        center_lat: '41.6762',
        center_long: '-71.5562'},

        {   text: 'South Carolina',
        value: 'South Carolina',
        center_lat: '33.9169',
        center_long: '-80.8964'},

        {   text: 'South Dakota',
        value: 'South Dakota',
        center_lat: '44.4443',
        center_long: '-100.2263'},

        {   text: 'Tennessee',
        value: 'Tennessee',
        center_lat: '35.8580',
        center_long: '-86.3505'},

        {   text: 'Texas',
        value: 'Texas',
        center_lat: '31.4757',
        center_long: '-99.3312'},

        {   text: 'Utah',
        value: 'Utah',
        center_lat: '39.3055',
        center_long: '-111.6703'},

        {   text: 'Vermont',
        value: 'Vermont',
        center_lat: '44.0687',
        center_long: '-72.6658'},

        {   text: 'Virginia',
        value: 'Virginia',
        center_lat: '37.5215',
        center_long: '-78.8537'},

        {   text: 'Washington',
        value: 'Washington',
        center_lat: '47.3826',
        center_long: '-120.4472'},

        {   text: 'West Virginia',
        value: 'West Virginia',
        center_lat: '38.6409',
        center_long: '-80.6227'},

        {   text: 'Wisconsin',
        value: 'Wisconsin',
        center_lat: '44.6243',
        center_long: '-89.9941'},

        {   text: 'Wyoming',
        value: 'Wyoming',
        center_lat: '42.9957',
        center_long: '-107.5512'}

]

export default states