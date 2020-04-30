var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan","Sikkim","Tamil Nadu","Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal");

var s_a = new Array();
s_a[1]="SOUTH ANDAMAN";
s_a[2]="ANANTAPUR | CHITTOOR | CUDDAPAH | EAST GODAVARI | GUNTUR | KRISHNA | KURNOOL | NELLORE | PRAKASAM | SRIKAKULAM | VISAKHAPATNAM | VIZIANAGARAM | WEST GODAVARI";
s_a[3]="ANJAW | CHANGLANG | DIBANG VALLEY | EAST KAMENG | EAST SIANG | KURUNG KUMEY | LOHIT | LOWER DIBANG VALLEY | LOWER SUBANSIRI | PAPUM PARE | TAWANG | TIRAP | UPPER SIANG | UPPER SUBANSIRI | WEST KAMENG | WEST SIANG ";
s_a[4]="BARPETA | BONGAIGAON | CACHAR | CHIRANG | DARRANG | DHEMAJI | DHUBRI | DIBRUGARH | GOALPARA | GOLAGHAT | HAILAKANDI | JORHAT | KAMRUP | KAMRUP METROPOLITAN | KARBI ANGLONG | KARIMGANJ | KOKRAJHAR | LAKHIMPUR | MARIGAON | NAGAON | NALBARI | NORTH CACHAR HILLS | ODALGURI | SIBSAGAR | SONITPUR | TINSUKIA";
s_a[5]="ARARIA | ARWAL | AURANAGABAD | BANKA | BEGUSARAI | BHAGALPUR | BHOJPUR | BUXAR | DARBHANGA | GAYA | GOPALGANJ | JAMUI | JEHANABAD | KAIMUR (BHABUA) | KATIHAR | KHAGARIA | KISHANGANJ | LAKHISARAI | MADHEPURA | MADHUBANI | MUNGER | MUZAFFARPUR | NALANDA | NAWADA | PASHCHIM CHAMPARAN | PATNA | PURBI CHAMPARAN | PURNIA | ROHTAS | SAHARSA | SAMASTIPUR | SARAN | SHEIKHPURA | SHEOHAR | SITAMARHI | SIWAN | SUPAUL | VAISHALI";
s_a[6]="CHANDIGARH ";
s_a[7]="BASTAR | BILASPUR | DANTEWADA | DHAMTARI | DURG | JANJGIR-CHAMPA | JASHPUR | KORBA | KORIYA | MAHASAMUND | RAIGARH | RAIPUR | RAJNANDAGON | SURGUJA ";
s_a[8]="DADRA AND NAGAR HAVELI";
s_a[9]=" DAMAN | DIU";
s_a[10]="CENTRAL  * | EAST | NEW DELHI | NORTH | NORTH EAST | NORTH WEST | SOUTH | SOUTH WEST | WEST";
s_a[11]="NORTH GOA | SOUTH GOA";
s_a[12]="AHMADABAD | AMRELI | ANAND | BANAS KANTHA | BHARUCH | BHAVNAGAR | DOHAD | GANDHINAGAR | JAMNAGAR | JUNAGADH | KACHCHH | KHEDA | MAHESANA | NARMADA | NAVSARI | PANCH MAHALS | PATAN | PORBANDAR | RAJKOT | SABAR KANTHA | SURAT | SURENDRANAGAR | TAPI | VADODARA | VALSAD";
s_a[13]="AMBALA | BHIWANI | FARIDABAD | FATEHABAD | GURGAON | HISAR | JHAJJAR | JIND | KAITHAL | KARNAL | KURUKSHETRA | MAHENDRAGARH | MEWAT | PALWAL | PANCHKULA | PANIPAT | REWARI | ROHTAK | SIRSA | SONIPAT | YAMUNANAGAR";
s_a[14]="ANANTNAG | BADGAM | BANDIPORA | BARAMULLA | DODA | GANDERBAL | JAMMU | KARGIL | KATHUA | KISHTWAR | KULGAM | KUPWARA | LEH (LADAKH) | PULWAMA | RAJAURI | RAMBAN | REASI | SAMBA | SRINAGAR | UDHAMPUR";
s_a[15]="BOKARO | CHATRA | DEOGHAR | DHANBAD | DUMKA | GARHWA | GIRIDIH | GODDA | GUMLA | HAZARIBAG | JAMTARA | KODERMA | LATEHAR | LOHARDAGA | PAKUR | PALAMU | PASCHIM SINGHBHUM | PURBI SINGHBHUM | RAMGARH | RANCHI | SAHIBGANJ | SAREIKELA AND KHARSAWAN | SIMDEGA";
s_a[16]="BAGALKOT | BANGALORE RURAL | BANGALORE URBAN | BELGAUM | BELLARY | BIDAR | BIJAPUR | CHAMARAJANAGAR | CHIK BALLAPUR | CHIKMAGALUR | CHITRADURGA | DAKSHIN KANNAD | DAVANGERE | DHARWAD | GADAG | GULBARGA | HASSAN | HAVERI | KODAGU | KOLAR | KOPPAL | MANDYA | MYSORE | RAICHUR | RAMANAGARAM | SHIMOGA | TUMKUR | UDUPI | UTTAR KANNADA | Yadgir";
s_a[17]="ALAPPUZHA | ERNAKULAM | IDUKKI | KANNUR | KASARGOD | KOLLAM | KOTTAYAM | KOZHIKODE | MALAPPURAM | PALAKKAD | PATHANAMTHITTA | THIRUVANANTHAPURAM | THRISSUR | WAYANAD";
s_a[18]="ALIRAJPUR | ANUPPUR | ASHOKNAGAR | BALAGHAT | BARWANI | BETUL | BHIND | BHOPAL | BURHANPUR | CHHATARPUR | CHHINDWARA | DAMOH | DATIA | DEWAS | DHAR | DINDORI | GUNA | GWALIOR | HARDA | HOSHANGABAD | INDORE | JABALPUR | JHABUA | KATNI | KHANDWA (EAST NIMAR) | MANDLA | MANDSAUR | MORENA | NARSINGHPUR | NEEMUCH | PANNA | RAISEN | RAJGARH | RATLAM | REWA | SAGAR | SATNA | SEHORE | SEONI | SHAHDOL | SHAJAPUR | SHEOPUR | SHIVPURI | SIDHI | SINGRAULI | TIKAMGARH | UJJAIN | UMARIA | VIDISHA";
s_a[19]="AHEMADNAGAR | AKOLA | AMRAVATI | AURANGABAD | BEED | BHANDARA | BULDANA | CHANDRAPUR | DHULE | GADCHIROLI | GONDIA | HINGOLI | JALGAON | JALNA | KOLHAPUR | LATUR | MUMBAI | MUMBAI (SUBURBAN) * | NAGPUR | NANDED | NANDURBAR | NASHIK | OSMANABAD | PARBHANI | PUNE | RAIGAD | RATNAGIRI | SANGLI | SATARA | SINDHUDURG | SOLAPUR | THANE | WARDHA | WASHIM | YAVATMAL";
s_a[20]="BISHNUPUR | CHANDEL | IMPHAL EAST | IMPHAL WEST | THOUBAL";
s_a[21]="EAST GARO HILLS | EAST KHASI HILLS | RI BHOI | SOUTH GARO HILLS | WEST GARO HILLS | WEST JAINTIA HILLS | WEST KHASI HILLS";
s_a[22]="AIZAWL | CHAMPHAI | KOLASIB | LAWNGTLAI | LUNGLEI | MAMIT | SAIHA | SERCHHIP";
s_a[23]="MON | DIMAPUR | KIPHIRE | KOHIMA | LONGLENG | MOKOKCHUNG | PEREN | PHEK | TUENSANG | WOKHA | ZUNHEBOTO";
s_a[24]="Anugul | Balangir | BALESHWAR | BARGARH | Baudh | BHADRAK | CUTTACK | Debagarh | DHENKANAL | GAJAPATI | GANJAM | JAGATSINGHAPUR | Jajapur | JHARSUGUDA | KALAHANDI | KANDHAMAL | KENDRAPARA | KENDUJHAR | KHORDHA | KORAPUT | MALKANGIRI | MAYURBHANJ | NABARANGAPUR | NAYAGARH | NUAPADA | PURI | RAYAGADA | SAMBALPUR | Subarnapur | SUNDARGARH";
s_a[25]="KARAIKAL | MAHE | PUDUCHERRY | YANAM";
s_a[26]="AMRITSAR | BATHINDA | BURNALA | FARIDKOT | FATEHGARH SAHIB | FEROZPUR | GURDASPUR | HOSHIARPUR | JALANDHAR | KAPURTHALA | LUDHIANA | MANSA | MOGA | MOHALI | MUKTSAR | PATHANKOT | PATIALA | RUPNAGAR | SANGRUR | Shaheed Bhagat Singh Nagar | TARANTARAN";
s_a[27]="AJMER | ALWAR | BANSWARA | BARAN | BARMER | BHARATPUR | BHILWARA | BIKANER | BUNDI | CHITTAURGARH | CHURU | DAUSA | DHAULPUR | DUNGARPUR | GANGANAGAR | HANUMANGARH | JAIPUR | JAISALMER | JALOR | JHALAWAR | JHUNJHUNUN | JODHPUR | KARAULI | KOTA | NAGAUR | PALI | RAJSAMAND | SAWAI MADHOPUR | SIKAR | SIROHI | TONK | UDAIPUR";
s_a[28]="East Sikkim | North Sikkim | South Sikkim | West Sikkim";
s_a[29]="ARIYALUR | CHENNAI | COIMBATORE | CUDDALORE | DHARMAPURI | DINDIGUL | ERODE | KANCHIPURAM | KANNIYAKUMARI (HQ: NAGERC | KARUR | KRISHNAGIRI | MADURAI | NAGAPATTINAM | NAMAKKAL | NILGIRIS    (HQ: UDHAGAMA | PERAMBALUR | PUDUKKOTTAI | RAMANATHAPURAM | SALEM | SIVAGANGA | THANJAVUR | THENI | THOOTHUKUDI | TIRUCHIRAPPALLI | TIRUNELVELI | TIRUPPUR | TIRUVALLUR | TIRUVANNAMALAI | TIRUVARUR | VELLORE | VILLUPURAM | VIRUDHUNAGAR";
s_a[30]="ADILABAD | HYDERABAD | KARIMNAGAR | KHAMMAM | MAHBUBNAGAR | MEDAK | NALGONDA | NIZAMABAD | RANGAREDDI | WARANGAL";
s_a[31]="DHALAI | NORTH TRIPURA | SOUTH TRIPURA | WEST TRIPURA";
s_a[32]="AGRA | ALIGARH | ALLAHABAD | AMBEDKAR NAGAR | AURAIYA | AZAMGARH | BAGHPAT | BAHRAICH | BALLIA | BALRAMPUR | BANDA | BARABANKI | BAREILLY | BASTI | BHIMNAGAR (SAMBHAL) | BIJNOR | BUDAUN | BULANDSHAHR | CHANDAULI | CHITRAKOOT | DEORIA | ETAH | ETAWAH | FAIZABAD | FARRUKHABAD | FATEHPUR | FIROZABAD | GAUTAM BUDDHA NAGAR | GHAZIABAD | GHAZIPUR | GONDA | GORAKHPUR | HAMIRPUR | HARDOI | JALAUN | JAUNPUR | JHANSI | JYOTIBA PHOOLE NAGAR (AMROHA) | KANNAUJ | KANPUR DEHAT | KANPUR NAGAR | KAUSHAMBI | KHERI | KUSHI NAGAR | LALITPUR | LUCKNOW | MAHAMAYA NAGAR (HATHRAS) | MAHARAJGANJ | MAHOBA | MAINPURI | MATHURA | MAU | MEERUT | MIRZAPUR | MORADABAD | MUZAFFARNAGAR | PILIBHIT | PRATAPGARH | RAE BARELI | RAMPUR | SAHARANPUR | SANT KABEER NAGAR | SANT RAVIDAS NAGAR | SHAHJAHANPUR | SHRAVASTI | SIDDHARTH NAGAR | SITAPUR | SONBHADRA | SULTANPUR | UNNAO | VARANASI";
s_a[33]="ALMORA | BAGESHWAR | CHAMOLI | CHAMPAWAT | DEHRADUN | GARHWAL | HARDWAR | NAINITAL | PITHORAGARH | RUDRAPRAYAG | TEHRI GARHWAL | UDHAM SINGH NAGAR | UTTARKASHI";
s_a[34]="BANKURA | HOOGHLY | HOWRAH | SOUTH 24 PARAGANAS";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_district(district_id, district_index){
	var option_str = document.getElementById(district_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select district','');
	option_str.selectedIndex = 0;
	var district_arr = s_a[district_index].split("|");
	for (var i=0; i<district_arr.length; i++) {
		option_str.options[option_str.length] = new Option(district_arr[i],district_arr[i]);
	}
}
