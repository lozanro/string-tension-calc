/**
 * String Tension Calculator
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/string-tension-calc
 */

const COLORS = ['#EDC240', '#AFD8F8', '#CB4B4B', '#4DA74D', '#9440ED',
	'#FF158A', '#0244FE', '#804040', '#FF8000'];

const SCALES = [
	{scale: '24.625"', inches: [24.625, 24.625]},
	{scale: '24.75"',  inches: [24.75, 24.75], defaultSel: true},
	{scale: '25"',     inches: [25,     25]},
	{scale: '25.4"',   inches: [25.4,   25.4]},
	{scale: '25.5"',   inches: [25.5,   25.5]},
	{scale: '26.5"',   inches: [26.5,   26.5]},
	{scale: '27"',     inches: [27,     27]},
	{scale: '27.5"',   inches: [27.5,   27.5]},
	{scale: '28"',     inches: [28,     28]},
	{scale: '28.625"', inches: [28.625, 28.625]},
	{scale: '29.4"',   inches: [29.4,   29.4]},
	{scale: '30"',     inches: [30,     30]},
	{scale: '24.625 &ndash; 25.5"', inches: [24.625, 25.5]},
	{scale: '25 &ndash; 25.5"',     inches: [25,     25.5]},
	{scale: '25 &ndash; 26"',       inches: [25,     26]},
	{scale: '25.4 &ndash; 27"',     inches: [25.4,   27]},
	{scale: '25.5 &ndash; 26.25"',  inches: [25.5,   26.25]},
	{scale: '25.5 &ndash; 26.5"',   inches: [25.5,   26.5]},
	{scale: '25.5 &ndash; 27"',     inches: [25.5,   27]},
	{scale: '25.5 &ndash; 27.26"',  inches: [25.5,   27.26]},
	{scale: '25.5 &ndash; 27.5"',   inches: [25.5,   27.5]},
	{scale: '25.5 &ndash; 27.8"',   inches: [25.5,   27.8]},
	{scale: '25.5 &ndash; 28.2"',   inches: [25.5,   28.2]},
	{scale: '25.5 &ndash; 28.625"', inches: [25.5,   28.625]},
	{scale: '26 &ndash; 28"',       inches: [26,     28]},
	{scale: '26 &ndash; 27.5"',     inches: [26,     27.5]},
	{scale: '26.5 &ndash; 28"',     inches: [26.5,   28]},
	{scale: '26.5 &ndash; 28.5"',   inches: [26.5,   28.5]},
	{scale: '27 &ndash; 28.625"',   inches: [27,     28.625]},
	{scale: '27 &ndash; 30"',       inches: [27,     30]}
];

const TUNINGS = [
	{tuning: 'E standard',  notes: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2', 'B1', 'F#1']},
	{tuning: 'Eb standard', notes: ['D#4','A#3','F#3','C#3','G#2','D#2','A#1','F1']},
	{tuning: 'D standard',  notes: ['D4', 'A3', 'F3', 'C3', 'G2', 'D2', 'A1', 'E1']},
	{tuning: 'C# standard', notes: ['C#4','G#3','E3', 'B2', 'F#2','C#2','G#1','D#1']},
	{tuning: 'C standard',  notes: ['C4', 'G3', 'D#3','A#2','F2', 'C2', 'G1', 'D1']},
	{tuning: 'All 4ths',  notes: ['F4', 'C4', 'G3', 'D3', 'A2', 'E2', 'B1', 'F#1' ]},
	{tuning: 'All 5ths',  notes: ['A4', 'D4', 'G3', 'C3', 'F2', 'A#1', 'D#1', 'G#0' ]},
	{tuning: 'All 5ths Violin',  notes: ['F#4', 'B3', 'E3', 'A2', 'D2', 'G1', 'C1', 'F0' ], defaultSel: true},
	{tuning: 'Fripp NST',  notes: ['G4', 'E4', 'A3', 'D3', 'G2', 'C2', 'F1', 'A#0' ]}
];

const NOTES = [
	{note: 'B4',  freq: 493.883 },
	{note: 'A#4', freq: 466.164 },
	{note: 'A4',  freq: 440.000 },
	{note: 'G#4', freq: 415.305 },
	{note: 'G4',  freq: 391.995 },
	{note: 'F#4', freq: 369.994 },
	{note: 'F4',  freq: 349.228 },
	{note: 'E4',  freq: 329.628 },
	{note: 'D#4', freq: 311.127 },
	{note: 'D4',  freq: 293.665 },
	{note: 'C#4', freq: 277.183 },
	{note: 'C4',  freq: 261.626 },
	{note: 'B3',  freq: 246.942 },
	{note: 'A#3', freq: 233.082 },
	{note: 'A3',  freq: 220     },
	{note: 'G#3', freq: 207.652 },
	{note: 'G3',  freq: 195.998 },
	{note: 'F#3', freq: 184.997 },
	{note: 'F3',  freq: 174.614 },
	{note: 'E3',  freq: 164.814 },
	{note: 'D#3', freq: 155.563 },
	{note: 'D3',  freq: 146.832 },
	{note: 'C#3', freq: 138.591 },
	{note: 'C3',  freq: 130.813 },
	{note: 'B2',  freq: 123.471 },
	{note: 'A#2', freq: 116.541 },
	{note: 'A2',  freq: 110     },
	{note: 'G#2', freq: 103.826 },
	{note: 'G2',  freq:  97.9989},
	{note: 'F#2', freq:  92.4686},
	{note: 'F2',  freq:  87.3071},
	{note: 'E2',  freq:  82.4069},
	{note: 'D#2', freq:  77.7817},
	{note: 'D2',  freq:  73.4162},
	{note: 'C#2', freq:  69.2957},
	{note: 'C2',  freq:  65.4064},
	{note: 'B1',  freq:  61.7354},
	{note: 'A#1', freq:  58.2705},
	{note: 'A1',  freq:  55     },
	{note: 'G#1', freq:  51.9131},
	{note: 'G1',  freq:  48.9994},
	{note: 'F#1', freq:  46.2493},
	{note: 'F1',  freq:  43.6535},
	{note: 'E1',  freq:  41.2034},
	{note: 'D#1', freq:  38.8909},
	{note: 'C#1', freq:  34.6478},
	{note: 'C1',  freq:  32.7032},
	{note: 'B0',  freq:  30.8677},
	{note: 'A#0', freq:  29.1352},
	{note: 'A0',  freq:  27.5000},
	{note: 'G#0', freq:  25.9600},
	{note: 'G0',  freq:  24.5000},
	{note: 'F#0', freq:  23.1200},
	{note: 'F0',  freq:  21.8300}
];

const GAUGES = [
	'.007 P',
	'.008 P',
	'.0085 P',
	'.009 P',
	'.0095 P',
	'.010 P',
	'.0105 P',
	'.011 P',
	'.0115 P',
	'.012 P',
	'.013 P',
	'.0135 P',
	'.014 P',
	'.015 P',
	'.016 P',
	'.017 P',
	'.018 P',
	'.019 P',
	'.020 P',
	'.022 P',
	'.024 P',
	'.026 P',

	'.017 W',
	'.018 W',
	'.019 W',
	'.020 W',
	'.021 W',
	'.022 W',
	'.024 W',
	'.025 W',
	'.026 W',
	'.028 W',
	'.030 W',
	'.032 W',
	'.034 W',
	'.035 W',
	'.036 W',
	'.037 W',
	'.038 W',
	'.039 W',
	'.040 W',
	'.042 W',
	'.044 W',
	'.045 W',
	'.046 W',
	'.048 W',
	'.049 W',
	'.050 W',
	'.052 W',
	'.054 W',
	'.056 W',
	'.059 W',
	'.060 W',
	'.062 W',
	'.064 W',
	'.065 W',
	'.066 W',
	'.068 W',
	'.070 W',
	'.072 W',
	'.074 W',
	'.080 W',
	'.084 W'
];

const PACKS = [
	{gauges: ['.007 P', '.009 P', '.011 P', '.020 W', '.030 W', '.038 W'], name: ".007/38 Dunlop Rev. Willy's"},
	{gauges: ['.008 P', '.010 P', '.015 P', '.021 W', '.030 W', '.038 W'], name: ".008/38 D'Addario EXL130"},
	{gauges: ['.008 P', '.011 P', '.014 P', '.022 W', '.030 W', '.038 W'], name: '.008/38 Ernie Ball Extra Slinky'},
	{gauges: ['.008 P', '.011 P', '.016 P', '.024 W', '.030 W', '.038 W'], name: '.008/38 Dunlop Extra Light'},
	{gauges: ['.008 P', '.010 P', '.012 P', '.020 W', '.030 W', '.040 W'], name: ".008/40 Dunlop Rev. Willy's"},
	{gauges: ['.008 P', '.011 P', '.014 P', '.022 W', '.032 W', '.046 W'], name: '.008/46 Fender Yngwie Malmsteen'},
	{gauges: ['.008 P', '.011 P', '.014 P', '.030 W', '.040 W', '.050 W'], name: ".008/50 Pyramid Dushan Petrossi"},
	{gauges: ['.008 P', '.012 P', '.015 P', '.026 W', '.042 W', '.052 W'], name: '.008/52 NST Curt Golden'},
	{gauges: ['.008 P', '.013 P', '.024 W', '.036 W', '.054 W', '.064 W'], name: '.008/64 All 5th Violin', defaultSel: true},
	{gauges: ['.0085 P','.0105 P','.015 P', '.022 W', '.032 W', '.039 W'], name: ".0085/39 D'Addario EXL130+"},
	{gauges: ['.0085 P','.010 P', '.015 P', '.024 W', '.038 W', '.056 W'], name: ".0085/56 NST Fabio Mittino"},
	{gauges: ['.009 P', '.011 P', '.016 P', '.024 W', '.032 W', '.042 W'], name: ".009/42 D'Addario / Ernie Ball"},
	{gauges: ['.009 P', '.012 P', '.015 P', '.022 W', '.030 W', '.040 W'], name: ".009/40 D'Addario EXL120BT balanced"},
	{gauges: ['.009 P', '.011 P', '.016 P', '.026 W', '.036 W', '.046 W'], name: ".009/46 D'Addario / Ernie Ball hybrid"},
	{gauges: ['.0095 P','.0115 P','.016 P', '.024 W', '.034 W', '.044 W'], name: ".0095/44 D'Addario EXL120+"},
	{gauges: ['.010 P', '.013 P', '.017 P', '.026 W', '.036 W', '.046 W'], name: ".010/46 D'Addario / Ernie Ball"},
	{gauges: ['.010 P', '.0135 P','.017 P', '.025 W', '.034 W', '.046 W'], name: ".010/46 D'Addario EXL110BT balanced"},
	{gauges: ['.010 P', '.012 P', '.016 P', '.028 W', '.038 W', '.048 W'], name: '.010/48 GHS David Gilmour'},
	{gauges: ['.010 P', '.013 P', '.017 P', '.028 W', '.038 W', '.048 W'], name: '.010/48 Dunlop Heavy Core Heavy'},
	{gauges: ['.010 P', '.014 P', '.020 W', '.028 W', '.038 W', '.048 W'], name: ".010/48 D'addario ECG23 Flatwound"},
	{gauges: ['.010 P', '.012 P', '.016 P', '.024 W', '.038 W', '.052 W'], name: ".010/52 NST Robert Fripp"},
	{gauges: ['.010 P', '.013 P', '.017 P', '.030 W', '.042 W', '.052 W'], name: ".010/52 D'Addario / Ernie Ball hybrid"},
	{gauges: ['.010 P', '.013 P', '.017 P', '.036 W', '.052 W', '.060 W'], name: '.010/60 Dunlop Zakk Wylde'},
	{gauges: ['.0105 P','.0135 P','.018 P', '.028 W', '.038 W', '.048 W'], name: ".0105/48 D'Addario EXL110+"},
	{gauges: ['.011 P', '.014 P', '.018 P', '.028 W', '.038 W', '.048 W'], name: '.011/48 Ernie Ball Power Slinky'},
	{gauges: ['.011 P', '.014 P', '.018 P', '.028 W', '.038 W', '.049 W'], name: ".011/49 D'Addario EXL115"},
	{gauges: ['.011 P', '.015 P', '.019 P', '.028 W', '.037 W', '.050 W'], name: ".011/50 D'Addario EXL115BT balanced"},
	{gauges: ['.011 P', '.015 P', '.022 W', '.030 W', '.040 W', '.050 W'], name: ".011/50 D'addario ECG24 Flatwound"},
	{gauges: ['.011 P', '.014 P', '.018 P', '.028 W', '.038 W', '.050 W'], name: '.011/50 Dunlop Heavy Core Heavier'},
	{gauges: ['.012 P', '.016 P', '.024 W', '.032 W', '.042 W', '.052 W'], name: ".012/52 D'Addario EJ21 / ECG25 Flatwound"},
	{gauges: ['.012 P', '.016 P', '.020 P', '.032 W', '.042 W', '.054 W'], name: ".012/54 D'Addario EXL145"},
	{gauges: ['.012 P', '.016 P', '.024 P', '.032 W', '.044 W', '.056 W'], name: '.012/56 Ernie Ball Not Even Slinky'},
	{gauges: ['.013 P', '.017 P', '.021 W', '.028 W', '.039 W', '.053 W'], name: ".013/53 Thomastik JS113 Flatwound"},
	{gauges: ['.013 P', '.017 P', '.026 W', '.035 W', '.045 W', '.056 W'], name: ".013/56 D'Addario ECG26 Flatwound"},
	{gauges: ['.013 P', '.017 P', '.026 W', '.036 W', '.046 W', '.056 W'], name: ".013/56 D'Addario EJ22"},
	{gauges: ['.013 P', '.017 P', '.026 W', '.036 W', '.046 W', '.062 W'], name: ".013/65 D'Addario EXL158"},
	{gauges: ['.013 P', '.018 P', '.030 W', '.044 W', '.056 W', '.072 W'], name: '.013/72 Ernie Ball Baritone Slinky'},
	{gauges: ['.014 P', '.018 P', '.026 W', '.044 W', '.056 W', '.068 W'], name: ".014/68 D'Addario EXL157"},
	{gauges: ['.009 P', '.011 P', '.016 P', '.024 W', '.032 W', '.042 W', '.054 W'], name: ".009/54 D'Addario EXL120-7"},
	{gauges: ['.009 P', '.011 P', '.016 P', '.024 W', '.032 W', '.042 W', '.052 W'], name: '.009/52 Ernie Ball Super Slinky 7'},
	{gauges: ['.0095 P','.013 P', '.016 P', '.024 W', '.034 W', '.046 W', '.064 W'], name: '.0095/64 Strandberg Optimized'},
	{gauges: ['.010 P', '.013 P', '.017 P', '.026 W', '.036 W', '.046 W', '.056 W'], name: '.010/56 Ernie Ball Regular Slinky 7'},
	{gauges: ['.010 P', '.013 P', '.017 P', '.026 W', '.036 W', '.046 W', '.059 W'], name: ".010/59 D'Addario EXL110-7"},
	{gauges: ['.010 P', '.013 P', '.017 P', '.028 W', '.038 W', '.048 W', '.060 W'], name: '.010/60 Dunlop Heavy Core Heavy7'},
	{gauges: ['.009 P', '.011 P', '.016 P', '.024 W', '.032 W', '.042 W', '.054 W', '.065 W'], name: ".009/65 D'Addario EXL120-8 / Ibanez IEGS8"},
	{gauges: ['.009 P', '.011 P', '.016 P', '.026 W', '.036 W', '.046 W', '.052 W', '.070 W'], name: ".009/70 Ibanez IEGS82"},
	{gauges: ['.009 P', '.012 P', '.016 P', '.024 W', '.032 W', '.044 W', '.060 W', '.080 W'], name: ".009/80 D'Addario NYXL0980"},
	{gauges: ['.009 P', '.011 P', '.016 P', '.024 W', '.034 W', '.046 W', '.064 W', '.080 W'], name: '.009/80 Ernie Ball 2624 Skinny Top Heavy Bottom'},
	{gauges: ['.009 P', '.012 P', '.015 P', '.022 W', '.030 W', '.042 W', '.056 W', '.084 W'], name: '.009/84 Strandberg Optimized'},
	{gauges: ['.010 P', '.013 P', '.017 P', '.030 W', '.042 W', '.054 W', '.064 W', '.074 W'], name: ".010/74 D'Addario NYXL1074 / Ernie Ball 2625"},
	{gauges: ['.010 P', '.013 P', '.017 P', '.030 W', '.044 W', '.052 W', '.062 W', '.080 W'], name: ".010/80 GHS Boomers 8 Thin n Thick 10-80"}
];
