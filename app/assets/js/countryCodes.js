function country(name, iso2, iso3, isoNumeric){
	this.name=name;
	this.iso2=iso2;
	this.iso3=iso3;
	this.isoNumeric=isoNumeric;
}

var countries=[];

countries.push(new country("Afghanistan", "AF", "AFG", "004"));
countries.push(new country("Albania", "AL", "ALB", "008"));
countries.push(new country("Algeria", "DZ", "DZA", "012"));
countries.push(new country("American Samoa", "AS", "ASM", "016"));
countries.push(new country("Andorra", "AD", "AND", "020"));
countries.push(new country("Angola", "AO", "AGO", "024"));
countries.push(new country("Anguilla", "AI", "AIA", "660"));
countries.push(new country("Antigua and Barbuda", "AG", "ATG", "028"));
countries.push(new country("Argentina", "AR", "ARG", "032"));
countries.push(new country("Armenia", "AM", "ARM", "051"));
countries.push(new country("Aruba", "AW", "ABW", "533"));
countries.push(new country("Australia", "AU", "AUS", "036"));
countries.push(new country("Austria", "AT", "AUT", "040"));
countries.push(new country("Azerbaijan", "AZ", "AZE", "031"));
countries.push(new country("Bahamas", "BS", "BHS", "044"));
countries.push(new country("Bahrain", "BH", "BHR", "048"));
countries.push(new country("Bangladesh", "BD", "BGD", "050"));
countries.push(new country("Barbados", "BB", "BRB", "052"));
countries.push(new country("Belarus", "BY", "BLR", "112"));
countries.push(new country("Belgium", "BE", "BEL", "056"));
countries.push(new country("Belize", "BZ", "BLZ", "084"));
countries.push(new country("Benin", "BJ", "BEN", "204"));
countries.push(new country("Bermuda", "BM", "BMU", "060"));
countries.push(new country("Bhutan", "BT", "BTN", "064"));
countries.push(new country("Bolivia", "BO", "BOL", "068"));
countries.push(new country("Bosnia and Herzegovina", "BA", "BIH", "070"));
countries.push(new country("Botswana", "BW", "BWA", "072"));
countries.push(new country("Brazil", "BR", "BRA", "076"));
countries.push(new country("British Virgin Islands", "VG", "VGB", "092"));
countries.push(new country("Brunei Darussalam", "BN", "BRN", "096"));
countries.push(new country("Bulgaria", "BG", "BGR", "100"));
countries.push(new country("Burkina Faso", "BF", "BFA", "854"));
countries.push(new country("Myanmar", "MM", "MMR", "104"));
countries.push(new country("Burundi", "BI", "BDI", "108"));
countries.push(new country("Cambodia", "KH", "KHM", "116"));
countries.push(new country("Cameroon", "CM", "CMR", "120"));
countries.push(new country("Canada", "CA", "CAN", "124"));
countries.push(new country("Cape Verde", "CV", "CPV", "132"));
countries.push(new country("Cayman Islands ", "KY", "CYM", "136"));
countries.push(new country("Central African Republic", "CF", "CAF", "140"));
countries.push(new country("Chad", "TD", "TCD", "148"));
countries.push(new country("Chile", "CL", "CHL", "152"));
countries.push(new country("China", "CN", "CHN", "156"));
countries.push(new country("Christmas Island", "CX", "CXR", "162"));
countries.push(new country("Cocos (Keeling) Islands", "CC", "CCK", "166"));
countries.push(new country("Colombia", "CO", "COL", "170"));
countries.push(new country("Comoros", "KM", "COM", "174"));
countries.push(new country("Congo, Democratic Republic of the", "CD", "COD", "180"));
countries.push(new country("Congo (Brazzaville)", "CG", "COG", "178"));
countries.push(new country("Cook Islands ", "CK", "COK", "184"));
countries.push(new country("Costa Rica", "CR", "CRI", "188"));
countries.push(new country("Côte d'Ivoire", "CI", "CIV", "384"));
countries.push(new country("Croatia", "HR", "HRV", "191"));
countries.push(new country("Cuba", "CU", "CUB", "192"));
countries.push(new country("Cyprus", "CY", "CYP", "196"));
countries.push(new country("Czech Republic", "CZ", "CZE", "203"));
countries.push(new country("Denmark", "DK", "DNK", "208"));
countries.push(new country("Djibouti", "DJ", "DJI", "262"));
countries.push(new country("Dominica", "DM", "DMA", "212"));
countries.push(new country("Dominican Republic", "DO", "DOM", "214"));
countries.push(new country("Ecuador", "EC", "ECU", "218"));
countries.push(new country("Egypt", "EG", "EGY", "818"));
countries.push(new country("El Salvador", "SV", "SLV", "222"));
countries.push(new country("Equatorial Guinea", "GQ", "GNQ", "226"));
countries.push(new country("Eritrea", "ER", "ERI", "232"));
countries.push(new country("Estonia", "EE", "EST", "233"));
countries.push(new country("Ethiopia", "ET", "ETH", "231"));
countries.push(new country("Falkland Islands (Malvinas) ", "FK", "FLK", "238"));
countries.push(new country("Faroe Islands", "FO", " FRO", "234"));
countries.push(new country("Fiji", "FJ", "FJI", "242"));
countries.push(new country("Finland", "FI", "FIN", "246"));
countries.push(new country("France", "FR", "FRA", "250"));
countries.push(new country("French Guiana", "GF", "GUF", "254"));
countries.push(new country("French Polynesia", "PF", "PYF", "258"));
countries.push(new country("Gabon", "GA", "GAB", "266"));
countries.push(new country("Gambia", "GM", "GMB", "270"));
countries.push(new country("Palestinian Territory, Gaza", "PS", " PSE", "275"));
countries.push(new country("Georgia", "GE", "GEO", "268"));
countries.push(new country("Germany", "DE", "DEU", "276"));
countries.push(new country("Ghana", "GH", "GHA", "288"));
countries.push(new country("Gibraltar ", "GI", "GIB", "292"));
countries.push(new country("Greece", "GR", "GRC", "300"));
countries.push(new country("Greenland", "GL", "GRL", "304"));
countries.push(new country("Grenada", "GD", "GRD", "308"));
countries.push(new country("Guadeloupe", "GP", "GLP", "312"));
countries.push(new country("Guam", "GU", "GUM", "316"));
countries.push(new country("Guatemala", "GT", "GTM", "320"));
countries.push(new country("Guernsey", "GG", "GGY", "831"));
countries.push(new country("Guinea", "GN", "GIN", "324"));
countries.push(new country("Guinea-Bissau", "GW", "GNB", "624"));
countries.push(new country("Guyana", "GY", "GUY", "328"));
countries.push(new country("Haiti", "HT", "HTI", "332"));
countries.push(new country("Heard Island and Mcdonald Islands", "HM", "HMD", "334"));
countries.push(new country("Honduras", "HN", "HND", "340"));
countries.push(new country("Hong Kong, Special Administrative Region of China", "HK", " HKG", "344"));
countries.push(new country("Hungary", "HU", "HUN", "348"));
countries.push(new country("Iceland", "IS", "ISL", "352"));
countries.push(new country("India", "IN", "IND", "356"));
countries.push(new country("Indonesia", "ID", "IDN", "360"));
countries.push(new country("Iran, Islamic Republic of", "IR", "IRN", "364"));
countries.push(new country("Iraq", "IQ", "IRQ", "368"));
countries.push(new country("Ireland", "IE", "IRL", "372"));
countries.push(new country("Israel", "IL", "ISR", "376"));
countries.push(new country("Italy", "IT", "ITA", "380"));
countries.push(new country("Jamaica", "JM", "JAM", "388"));
countries.push(new country("Japan", "JP", "JPN", "392"));
countries.push(new country("Jersey", "JE", "JEY", "832"));
countries.push(new country("Jordan", "JO", "JOR", "400"));
countries.push(new country("Kazakhstan", "KZ", "KAZ", "398"));
countries.push(new country("Kenya", "KE", "KEN", "404"));
countries.push(new country("Kiribati", "KI", "KIR", "296"));
countries.push(new country("Korea, Democratic People's Republic of", "KP", "PRK", "408"));
countries.push(new country("Korea, Republic of", "KR", "KOR", "410"));
countries.push(new country("Kuwait", "KW", "KWT", "414"));
countries.push(new country("Kyrgyzstan", "KG", "KGZ", "417"));
countries.push(new country("Lao PDR", "LA", "LAO", "418"));
countries.push(new country("Latvia", "LV", "LVA", "428"));
countries.push(new country("Lebanon", "LB", "LBN", "422"));
countries.push(new country("Lesotho", "LS", "LSO", "426"));
countries.push(new country("Liberia", "LR", "LBR", "430"));
countries.push(new country("Libya", "LY", "LBY", "434"));
countries.push(new country("Liechtenstein", "LI", "LIE", "438"));
countries.push(new country("Lithuania", "LT", "LTU", "440"));
countries.push(new country("Luxembourg", "LU", "LUX", "442"));
countries.push(new country("Macao, Special Administrative Region of China", "MO", "MAC", "446"));
countries.push(new country("Macedonia, Republic of", "MK", "MKD", "807"));
countries.push(new country("Madagascar", "MG", "MDG", "450"));
countries.push(new country("Malawi", "MW", "MWI", "454"));
countries.push(new country("Malaysia", "MY", "MYS", "458"));
countries.push(new country("Maldives", "MV", "MDV", "462"));
countries.push(new country("Mali", "ML", "MLI", "466"));
countries.push(new country("Malta", "MT", "MLT", "470"));
countries.push(new country("Isle of Man ", "IM", "IMN", "833"));
countries.push(new country("Marshall Islands", "MH", "MHL", "584"));
countries.push(new country("Martinique", "MQ", "MTQ", "474"));
countries.push(new country("Mauritania", "MR", "MRT", "478"));
countries.push(new country("Mauritius", "MU", "MUS", "480"));
countries.push(new country("Mayotte", "YT", "MYT", "175"));
countries.push(new country("Mexico", "MX", "MEX", "484"));
countries.push(new country("Micronesia, Federated States of", "FM", "FSM", "583"));
countries.push(new country("Moldova", "MD", "MDA", "498"));
countries.push(new country("Monaco", "MC", "MCO", "492"));
countries.push(new country("Mongolia", "MN", "MNG", "496"));
countries.push(new country("Montserrat", "MS", "MSR", "500"));
countries.push(new country("Morocco", "MA", "MAR", "504"));
countries.push(new country("Mozambique", "MZ", "MOZ", "508"));
countries.push(new country("Namibia", "NA", "NAM", "516"));
countries.push(new country("Nauru", "NR", "NRU", "520"));
countries.push(new country("Nepal", "NP", "NPL", "524"));
countries.push(new country("Netherlands", "NL", "NLD", "528"));
countries.push(new country("Netherlands Antilles", "AN", "ANT", "530"));
countries.push(new country("New Caledonia", "NC", "NCL", "540"));
countries.push(new country("New Zealand", "NZ", "NZL", "554"));
countries.push(new country("Nicaragua", "NI", "NIC", "558"));
countries.push(new country("Niger", "NE", "NER", "562"));
countries.push(new country("Nigeria", "NG", "NGA", "566"));
countries.push(new country("Niue ", "NU", "NIU", "570"));
countries.push(new country("Norfolk Island", "NF", "NFK", "574"));
countries.push(new country("Northern Mariana Islands", "MP", "MNP", "580"));
countries.push(new country("Norway", "NO", "NOR", "578"));
countries.push(new country("Oman", "OM", "OMN", "512"));
countries.push(new country("Pakistan", "PK", "PAK", "586"));
countries.push(new country("Palau", "PW", "PLW", "585"));
countries.push(new country("Panama", "PA", "PAN", "591"));
countries.push(new country("Papua New Guinea", "PG", "PNG", "598"));
countries.push(new country("Paraguay", "PY", "PRY", "600"));
countries.push(new country("Peru", "PE", "PER", "604"));
countries.push(new country("Philippines", "PH", "PHL", "608"));
countries.push(new country("Pitcairn", "PN", "PCN", "612"));
countries.push(new country("Poland", "PL", "POL", "616"));
countries.push(new country("Portugal", "PT", "PRT", "620"));
countries.push(new country("Puerto Rico", "PR", "PRI", "630"));
countries.push(new country("Qatar", "QA", "QAT", "634"));
countries.push(new country("Réunion", "RE", "REU", "638"));
countries.push(new country("Romania", "RO", "ROU", "642"));
countries.push(new country("Russian Federation", "RU", "RUS", "643"));
countries.push(new country("Rwanda", "RW", "RWA", "646"));
countries.push(new country("Saint Helena", "SH", "SHN", "654"));
countries.push(new country("Saint Kitts and Nevis", "KN", "KNA", "659"));
countries.push(new country("Saint Lucia", "LC", "LCA", "662"));
countries.push(new country("Saint Pierre and Miquelon ", "PM", "SPM", "666"));
countries.push(new country("Saint Vincent and Grenadines", "VC", "VCT", "670"));
countries.push(new country("Samoa", "WS", "WSM", "882"));
countries.push(new country("San Marino", "SM", "SMR", "674"));
countries.push(new country("Sao Tome and Principe", "ST", "STP", "678"));
countries.push(new country("Saudi Arabia", "SA", "SAU", "682"));
countries.push(new country("Senegal", "SN", "SEN", "686"));
countries.push(new country("Serbia", "RS", "SRB", "688"));
countries.push(new country("Seychelles", "SC", "SYC", "690"));
countries.push(new country("Sierra Leone", "SL", "SLE", "694"));
countries.push(new country("Singapore", "SG", "SGP", "702"));
countries.push(new country("Slovakia", "SK", "SVK", "703"));
countries.push(new country("Slovenia", "SI", "SVN", "705"));
countries.push(new country("Solomon Islands", "SB", "SLB", "090"));
countries.push(new country("Somalia", "SO", "SOM", "706"));
countries.push(new country("South Africa", "ZA", "ZAF", "710"));
countries.push(new country("Spain", "ES", "ESP", "724"));
countries.push(new country("Sri Lanka", "LK", "LKA", "144"));
countries.push(new country("Sudan", "SD", "SDN", "736"));
countries.push(new country("Suriname *", "SR", "SUR", "740"));
countries.push(new country("Swaziland", "SZ", "SWZ", "748"));
countries.push(new country("Sweden", "SE", "SWE", "752"));
countries.push(new country("Switzerland", "CH", "CHE", "756"));
countries.push(new country("Syrian Arab Republic (Syria)", "SY", "SYR", "760"));
countries.push(new country("Taiwan, Republic of China", "TW", "TWN", "158"));
countries.push(new country("Tajikistan", "TJ", "TJK", "762"));
countries.push(new country("Tanzania *, United Republic of", "TZ", "TZA", "834"));
countries.push(new country("Thailand", "TH", "THA", "764"));
countries.push(new country("Togo", "TG", "TGO", "768"));
countries.push(new country("Tokelau ", "TK", "TKL", "772"));
countries.push(new country("Tonga", "TO", "TON", "776"));
countries.push(new country("Trinidad and Tobago", "TT", "TTO", "780"));
countries.push(new country("Tunisia", "TN", "TUN", "788"));
countries.push(new country("Turkey", "TR", "TUR", "792"));
countries.push(new country("Turkmenistan", "TM", "TKM", "795"));
countries.push(new country("Turks and Caicos Islands ", "TC", "TCA", "796"));
countries.push(new country("Tuvalu", "TV", "TUV", "798"));
countries.push(new country("Uganda", "UG", "UGA", "800"));
countries.push(new country("Ukraine", "UA", "UKR", "804"));
countries.push(new country("United Arab Emirates", "AE", "ARE", "784"));
countries.push(new country("United Kingdom", "GB", "GBR", "826"));
countries.push(new country("United States of America", "US", "USA", "840"));
countries.push(new country("Uruguay", "UY", "URY", "858"));
countries.push(new country("Uzbekistan", "UZ", "UZB", "860"));
countries.push(new country("Vanuatu", "VU", "VUT", "548"));
countries.push(new country("Venezuela (Bolivarian Republic of)", "VE", "VEN", "862"));
countries.push(new country("Viet Nam", "VN", "VNM", "704"));
countries.push(new country("Virgin Islands, US", "VI", "VIR", "850"));
countries.push(new country("Wallis and Futuna Islands ", "WF", "WLF", "876"));
countries.push(new country("Palestinian Territory, West Bank", "PS", " PSE", "275"));
countries.push(new country("Western Sahara", "EH", "ESH", "732"));
countries.push(new country("Yemen", "YE", "YEM", "887"));
countries.push(new country("Zambia", "ZM", "ZMB", "894"));
countries.push(new country("Zimbabwe", "ZW", "ZWE", "716"
countries.push(new country("South Sudan", "SS", "SSD", "728"));
countries.push(new country("Montenegro", "ME", "MNE", "499"));
countries.push(new country("Saint-Barthélemy", "BL", "BLM", "652"));
countries.push(new country("Saint-Martin (French part)", "MF", "MAF", "663"));
countries.push(new country("Svalbard and Jan Mayen Islands ", "SJ", "SJM", "744"));
countries.push(new country("Timor-Leste", "TL", "TLS", "626"));
countries.push(new country("United States Minor Outlying Islands", "UM", "UMI", "581"));
countries.push(new country("Antarctica", "AQ", "ATA", "010"));
