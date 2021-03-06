class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // this.innerHTML = `<footer class="text-white bg-green-900 py-6">ASU 2021 Funded By Blablabla Developed by Blablabla</footer>`;
    this.innerHTML = `
    <div class="w-full bg-green-900 text-white">
  <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
    <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
      <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="250px" height="auto" viewBox="0 0 1116.000000 292.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g transform="translate(0.000000,292.000000) scale(0.100000,-0.100000)"
        fill="#ffffff" stroke="none">
        <path d="M710 2357 c0 -7 13 -26 30 -42 61 -58 62 -45 -65 -556 -64 -255 -118
        -472 -121 -481 -5 -17 8 -18 169 -18 l175 0 24 103 23 102 156 3 156 2 17 -67
        c9 -38 22 -85 27 -107 l10 -39 307 6 c217 4 324 10 363 20 63 15 144 59 160
        85 9 15 16 12 58 -29 60 -57 130 -79 258 -79 101 0 168 17 217 53 l32 25 11
        -29 c6 -16 23 -33 38 -39 37 -14 372 -13 381 1 3 6 -7 25 -24 42 -16 18 -35
        42 -41 54 -8 15 -11 170 -11 512 l0 491 -185 0 -185 0 0 -379 c0 -233 -4 -389
        -10 -408 -27 -77 -154 -84 -180 -10 -6 19 -10 172 -10 414 l0 384 -387 -3
        c-330 -4 -397 -7 -448 -22 -75 -22 -143 -65 -175 -112 l-24 -37 -18 69 c-27
        110 -5 104 -394 104 -269 0 -334 -3 -334 -13z m1385 -177 c-25 -49 -40 -90
        -34 -90 7 0 40 25 74 55 35 30 66 55 69 55 4 0 -16 -30 -44 -66 -72 -97 -69
        -103 24 -47 33 20 72 43 86 51 14 8 -9 -17 -50 -55 -41 -39 -72 -74 -69 -77 3
        -3 49 12 102 33 54 22 97 38 97 36 0 -2 -34 -25 -77 -52 -42 -26 -81 -51 -87
        -55 -27 -18 9 -17 94 2 51 11 94 19 96 17 2 -2 -37 -20 -86 -42 -50 -21 -88
        -40 -85 -43 6 -6 85 -4 175 3 48 4 42 1 -48 -23 -57 -15 -104 -32 -105 -37 -1
        -6 48 -14 113 -20 l115 -11 -80 -7 c-121 -11 -158 -18 -148 -27 4 -5 51 -20
        103 -34 l95 -25 -115 6 c-73 3 -111 2 -105 -4 6 -5 46 -25 90 -44 91 -38 83
        -47 -20 -21 -64 17 -70 21 -79 50 -11 41 -77 116 -129 149 -22 14 -85 43 -141
        65 -55 22 -118 49 -139 61 -76 42 -82 113 -12 142 44 19 138 18 190 0 22 -8
        40 -15 41 -15 1 0 30 36 65 80 35 44 65 80 67 80 1 0 -18 -40 -43 -90z m-655
        -60 c0 -15 -5 -12 -26 11 -19 22 -19 22 4 10 12 -6 22 -16 22 -21z m-240 -422
        c0 -16 -11 -18 -101 -18 -91 0 -100 2 -95 18 3 9 26 103 52 207 l48 190 48
        -190 c26 -104 48 -198 48 -207z m224 341 c5 -5 7 -11 4 -15 -5 -5 -88 44 -88
        52 0 5 74 -27 84 -37z m-31 -64 c21 -4 42 -15 48 -26 13 -26 2 -24 -72 11 -35
        17 -53 29 -39 26 14 -2 42 -8 63 -11z m80 -91 c38 -65 123 -117 285 -174 145
        -51 185 -88 168 -154 -10 -41 -81 -70 -155 -63 -31 3 -65 8 -76 11 -16 5 -32
        -9 -79 -69 -33 -41 -61 -75 -63 -75 -1 0 16 38 39 85 23 46 39 87 35 91 -3 4
        -40 -24 -82 -61 -41 -37 -75 -65 -75 -63 0 2 25 38 55 78 50 67 63 90 50 90
        -4 0 -97 -55 -165 -99 -14 -8 11 19 55 61 44 42 78 78 75 81 -3 3 -43 -10 -89
        -29 -47 -19 -86 -32 -88 -30 -2 2 30 25 71 52 72 45 97 71 59 61 -70 -19 -165
        -39 -169 -35 -2 3 31 20 73 38 43 19 83 38 88 43 6 6 -32 7 -105 4 l-115 -6
        95 25 c145 39 144 40 -50 62 l-75 8 113 8 c62 5 115 12 117 17 5 8 -30 20
        -155 53 l-55 14 105 -6 c71 -3 108 -9 113 -18z m802 -281 c31 -20 54 -38 52
        -39 -2 -2 -29 6 -60 19 -39 15 -57 28 -57 40 0 23 2 22 65 -20z m25 -131 c0
        -2 -10 2 -22 10 -13 8 -33 21 -45 29 -13 8 -23 20 -23 27 0 7 20 -4 45 -25 25
        -20 45 -39 45 -41z m-89 -44 c11 -21 11 -22 -4 -9 -10 7 -17 17 -17 22 0 15 9
        10 21 -13z"/>
        <path d="M3106 2354 c-21 -21 -20 -47 2 -67 27 -24 59 -21 78 8 15 23 15 27 0
        50 -19 29 -56 33 -80 9z m11 -46 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2
        -19 0 -25z m63 17 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15 4 8 8 15 10 15 2 0 4
        -7 4 -15z"/>
        <path d="M3370 2130 l0 -240 148 0 c161 0 215 14 245 62 40 63 25 142 -33 170
        -32 15 -32 16 -11 27 27 15 51 62 51 99 0 41 -39 95 -80 109 -20 7 -95 12
        -177 12 l-143 1 0 -240z m260 125 c31 -38 -14 -75 -92 -75 l-48 0 0 45 0 45
        64 0 c43 0 67 -5 76 -15z m10 -185 c24 -24 25 -32 3 -59 -14 -17 -34 -23 -85
        -28 l-68 -6 0 57 0 56 65 0 c52 0 69 -4 85 -20z"/>
        <path d="M3820 2325 l0 -45 55 0 55 0 0 45 0 45 -55 0 -55 0 0 -45z"/>
        <path d="M4610 2305 l0 -65 -27 7 c-48 14 -102 8 -130 -13 -52 -39 -67 -70
        -71 -145 -7 -124 39 -196 133 -207 28 -3 54 1 74 11 17 9 31 11 31 6 0 -5 23
        -9 50 -9 l50 0 0 240 0 240 -55 0 -55 0 0 -65z m-21 -154 c28 -28 36 -91 17
        -135 -17 -41 -34 -51 -71 -42 -49 12 -59 132 -14 177 24 24 44 24 68 0z"/>
        <path d="M4780 2325 l0 -45 55 0 55 0 0 45 0 45 -55 0 -55 0 0 -45z"/>
        <path d="M6260 2325 l0 -45 55 0 55 0 0 45 0 45 -55 0 -55 0 0 -45z"/>
        <path d="M7170 2130 l0 -240 65 0 65 0 0 73 c0 68 2 75 30 102 16 16 32 27 34
        24 2 -2 30 -48 61 -101 l57 -98 75 0 75 0 -23 38 c-13 20 -50 82 -84 137 -34
        55 -65 106 -69 113 -5 8 19 41 73 96 45 45 81 85 81 89 0 4 -33 7 -74 7 l-74
        0 -81 -87 -80 -88 -1 88 0 87 -65 0 -65 0 0 -240z"/>
        <path d="M8950 2130 l0 -240 55 0 55 0 0 240 0 240 -55 0 -55 0 0 -240z"/>
        <path d="M9720 2301 l0 -69 -44 16 c-42 15 -47 15 -93 -4 -68 -28 -93 -74 -93
        -174 0 -84 18 -131 61 -163 37 -27 108 -33 147 -13 18 9 32 12 32 6 0 -5 22
        -10 50 -10 l50 0 0 240 0 240 -55 0 -55 0 0 -69z m-20 -151 c15 -15 20 -33 20
        -78 0 -70 -19 -102 -60 -102 -41 0 -64 45 -57 114 7 75 55 108 97 66z"/>
        <path d="M6460 2295 c0 -52 -1 -55 -25 -55 -22 0 -25 -4 -25 -35 0 -31 3 -35
        25 -35 l25 0 0 -115 c0 -110 1 -117 25 -140 20 -21 34 -25 85 -25 l60 0 0 44
        c0 41 -2 45 -27 48 l-28 3 -3 93 -3 92 36 0 c33 0 35 2 35 35 0 33 -2 35 -35
        35 l-35 0 0 55 0 55 -55 0 -55 0 0 -55z"/>
        <path d="M4085 2247 c-77 -30 -115 -88 -115 -177 0 -118 72 -190 190 -190 116
        0 190 73 190 187 0 29 -6 68 -14 86 -35 84 -158 130 -251 94z m121 -100 c23
        -20 28 -32 28 -76 1 -46 -3 -56 -27 -77 -35 -30 -59 -30 -92 -1 -50 42 -41
        136 15 164 35 18 45 16 76 -10z"/>
        <path d="M5360 2238 c-64 -32 -90 -82 -90 -173 0 -86 21 -131 76 -162 43 -25
        131 -31 181 -12 33 12 93 67 93 86 0 7 -17 21 -38 32 l-39 20 -25 -30 c-35
        -39 -87 -41 -117 -3 -12 15 -21 31 -21 35 0 5 57 9 126 9 l127 0 -7 52 c-4 28
        -13 63 -21 77 -44 85 -152 115 -245 69z m132 -85 c29 -26 21 -33 -42 -33 -62
        0 -71 7 -44 34 20 21 63 20 86 -1z"/>
        <path d="M5972 2240 c-53 -24 -79 -76 -66 -129 12 -46 46 -69 123 -83 63 -12
        87 -31 60 -49 -22 -15 -85 -3 -116 20 l-27 22 -34 -34 c-19 -19 -31 -40 -28
        -46 20 -31 92 -56 166 -56 113 0 170 42 170 125 0 63 -33 90 -137 114 -37 8
        -58 18 -58 27 0 21 49 23 90 3 l37 -17 31 31 c26 26 28 33 18 46 -17 20 -103
        46 -150 46 -20 0 -55 -9 -79 -20z"/>
        <path d="M7804 2251 c-17 -4 -36 -11 -42 -15 -7 -4 -12 -2 -12 3 0 7 -23 11
        -55 11 l-55 0 0 -180 0 -180 55 0 55 0 0 109 c0 134 8 161 49 161 44 0 51 -23
        51 -154 l0 -116 55 0 55 0 0 145 c0 147 -7 182 -39 202 -26 16 -81 23 -117 14z"/>
        <path d="M8119 2250 c-77 -23 -119 -89 -119 -186 0 -115 72 -184 191 -184 142
        0 221 116 177 262 -26 88 -145 140 -249 108z m108 -95 c27 -19 46 -77 38 -115
        -7 -33 -47 -70 -76 -70 -33 0 -70 42 -75 85 -6 47 11 84 46 102 32 16 41 16
        67 -2z"/>
        <path d="M9190 2238 c-61 -31 -90 -88 -90 -176 0 -117 62 -182 174 -182 72 0
        113 17 155 65 l33 38 -43 22 -43 23 -27 -29 c-36 -39 -89 -40 -118 -3 -12 15
        -21 31 -21 35 0 5 56 9 125 9 l125 0 0 28 c0 148 -140 236 -270 170z m134 -84
        c27 -27 18 -34 -44 -34 -33 0 -60 3 -60 7 0 3 7 15 17 25 20 22 66 24 87 2z"/>
        <path d="M10354 2241 c-51 -23 -80 -64 -95 -131 -19 -91 16 -181 85 -214 44
        -21 138 -21 182 0 34 16 84 67 84 85 0 5 -19 18 -42 30 -31 16 -43 18 -46 9
        -17 -50 -95 -67 -132 -28 -40 43 -30 48 105 48 140 0 132 -5 114 79 -13 62
        -40 98 -93 122 -52 24 -110 24 -162 0z m134 -98 l14 -23 -66 0 c-63 0 -66 1
        -56 19 12 24 27 30 64 28 17 -1 35 -11 44 -24z"/>
        <path d="M3820 2070 l0 -180 55 0 55 0 0 180 0 180 -55 0 -55 0 0 -180z"/>
        <path d="M4780 2070 l0 -180 55 0 55 0 0 180 0 180 -55 0 -55 0 0 -180z"/>
        <path d="M4920 2243 c0 -3 26 -84 57 -180 l57 -174 59 3 60 3 53 165 c30 91
        54 171 54 178 0 8 -18 12 -55 12 -35 0 -57 -5 -60 -12 -3 -7 -16 -60 -28 -117
        -21 -92 -25 -100 -30 -69 -3 19 -15 72 -27 117 l-22 81 -59 0 c-32 0 -59 -3
        -59 -7z"/>
        <path d="M5670 2070 l0 -180 55 0 55 0 0 109 c0 122 5 134 65 145 34 7 35 8
        35 56 0 44 -3 50 -20 50 -12 0 -34 -7 -50 -15 -27 -14 -30 -14 -30 0 0 12 -12
        15 -55 15 l-55 0 0 -180z"/>
        <path d="M6260 2070 l0 -180 55 0 55 0 0 180 0 180 -55 0 -55 0 0 -180z"/>
        <path d="M6660 2244 c0 -3 25 -87 56 -186 60 -194 60 -198 2 -198 -26 0 -28
        -3 -28 -45 l0 -45 56 0 c57 0 90 12 111 39 12 16 143 409 143 430 0 7 -23 11
        -58 11 l-59 0 -23 -110 c-14 -60 -27 -104 -31 -97 -3 6 -16 56 -28 110 l-22
        97 -60 0 c-32 0 -59 -3 -59 -6z"/>
        <path d="M8390 2235 c0 -12 61 -243 86 -327 4 -15 17 -18 68 -18 l62 0 18 88
        c10 48 21 91 24 97 3 5 15 -33 27 -85 l20 -95 62 -3 61 -3 11 33 c30 97 91
        308 91 318 0 7 -20 10 -57 8 l-57 -3 -18 -80 c-31 -140 -29 -139 -52 -25 l-22
        105 -60 3 -60 3 -18 -93 c-10 -51 -21 -100 -25 -108 -3 -8 -15 32 -26 90 l-21
        105 -57 3 c-46 2 -57 0 -57 -13z"/>
        <path d="M9955 2241 c-102 -42 -113 -256 -16 -314 33 -19 121 -23 152 -7 16 9
        19 7 19 -15 0 -30 -32 -65 -60 -65 -21 0 -60 33 -60 50 0 6 -25 10 -55 10
        l-55 0 0 -33 c0 -62 64 -100 166 -100 75 1 114 15 149 53 18 20 20 39 23 226
        l3 204 -55 0 c-32 0 -56 -4 -56 -10 0 -7 -6 -7 -19 0 -23 12 -107 12 -136 1z
        m126 -90 c19 -15 23 -28 23 -71 0 -43 -4 -56 -23 -71 -30 -24 -46 -24 -71 1
        -14 14 -20 33 -20 68 0 49 13 75 40 85 24 9 27 8 51 -12z"/>
        <path d="M6976 1745 c-130 -46 -190 -223 -124 -367 53 -115 183 -160 303 -104
        50 23 105 76 105 100 0 7 -21 22 -46 34 l-46 23 -35 -36 c-26 -26 -42 -35 -68
        -35 -106 0 -154 173 -70 257 46 46 92 46 139 -2 l35 -35 46 22 c25 12 45 28
        45 35 0 8 -19 33 -42 56 -64 64 -155 83 -242 52z"/>
        <path d="M5770 1705 l0 -45 55 0 55 0 0 45 0 45 -55 0 -55 0 0 -45z"/>
        <path d="M3370 1500 l0 -240 65 0 65 0 0 240 0 240 -65 0 -65 0 0 -240z"/>
        <path d="M3940 1665 c0 -52 -1 -55 -25 -55 -22 0 -25 -4 -25 -35 0 -30 3 -35
        24 -35 24 0 24 -1 28 -115 3 -103 5 -117 26 -137 18 -19 33 -23 85 -23 l62 0
        3 48 c3 46 3 47 -26 47 -37 0 -42 12 -42 106 l0 74 35 0 c33 0 35 2 35 35 0
        32 -2 35 -30 35 -30 0 -30 1 -30 55 l0 55 -60 0 -60 0 0 -55z"/>
        <path d="M5560 1665 c0 -52 -1 -55 -25 -55 -22 0 -25 -4 -25 -35 0 -31 3 -35
        25 -35 l25 0 0 -114 c0 -147 9 -161 102 -161 l63 0 3 48 c3 46 3 47 -27 47
        l-31 0 0 90 0 90 35 0 c33 0 35 2 35 35 0 33 -2 35 -35 35 l-35 0 0 55 0 55
        -55 0 -55 0 0 -55z"/>
        <path d="M8060 1665 c0 -52 -1 -55 -25 -55 -22 0 -25 -4 -25 -35 0 -30 3 -35
        24 -35 24 0 24 -1 28 -115 3 -103 5 -117 26 -137 18 -19 33 -23 85 -23 l62 0
        3 48 c3 46 3 47 -26 47 -37 0 -42 12 -42 106 l0 74 35 0 c33 0 35 2 35 35 0
        32 -2 35 -30 35 -30 0 -30 1 -30 55 l0 55 -60 0 -60 0 0 -55z"/>
        <path d="M3707 1624 c-4 -4 -40 -6 -82 -5 l-75 2 0 -181 0 -180 60 0 60 0 0
        130 c0 118 2 130 19 140 27 14 37 13 55 -6 13 -12 16 -40 16 -140 l0 -124 55
        0 55 0 0 156 0 156 -29 29 c-25 24 -38 29 -79 29 -27 0 -52 -3 -55 -6z"/>
        <path d="M4235 1616 c-87 -39 -123 -176 -72 -276 36 -73 124 -105 217 -80 44
        12 127 81 117 97 -3 4 -22 17 -42 27 l-36 20 -25 -27 c-34 -37 -70 -44 -101
        -20 -14 10 -30 29 -34 41 -8 22 -8 22 116 22 l125 0 0 38 c0 51 -37 122 -79
        149 -40 27 -136 31 -186 9z m123 -82 c41 -29 28 -44 -38 -44 -64 0 -72 8 -40
        40 24 24 48 25 78 4z"/>
        <path d="M4633 1623 c-13 -2 -36 -18 -53 -34 -77 -78 -60 -245 30 -292 35 -18
        102 -19 144 -2 17 8 19 5 12 -25 -3 -19 -12 -38 -19 -42 -25 -16 -65 -8 -85
        17 -17 21 -28 25 -71 25 -49 0 -51 -1 -51 -28 0 -40 24 -68 75 -88 54 -20 154
        -15 204 10 54 28 61 61 61 271 l0 185 -55 0 c-30 0 -55 -4 -55 -9 0 -6 -12 -3
        -27 5 -27 13 -64 16 -110 7z m105 -91 c36 -23 33 -142 -4 -156 -51 -19 -84 10
        -84 73 0 72 42 112 88 83z"/>
        <path d="M5085 1615 c-24 -9 -41 -11 -43 -5 -2 6 -28 10 -58 10 l-54 0 0 -180
        0 -180 60 0 59 0 3 123 3 122 43 9 42 10 0 53 c0 29 -3 53 -7 53 -5 -1 -26 -7
        -48 -15z"/>
        <path d="M5234 1616 c-37 -16 -64 -51 -64 -83 0 -21 4 -23 55 -23 44 0 56 4
        65 20 14 27 56 26 70 -1 7 -11 10 -22 8 -23 -2 -2 -30 -8 -63 -15 -109 -24
        -145 -55 -145 -127 0 -79 71 -126 155 -103 22 6 46 16 53 21 9 8 12 6 12 -6 0
        -13 11 -16 53 -16 l52 0 -3 142 c-2 82 -9 154 -15 168 -7 14 -28 33 -47 42
        -42 22 -141 23 -186 4z m125 -218 c-13 -48 -46 -69 -77 -49 -33 21 4 56 85 80
        1 1 -3 -14 -8 -31z"/>
        <path d="M6015 1616 c-42 -18 -83 -69 -91 -112 -11 -57 1 -142 23 -172 61 -82
        191 -105 276 -48 105 70 100 261 -9 323 -46 26 -149 31 -199 9z m142 -98 c28
        -31 36 -73 23 -114 -13 -39 -35 -54 -79 -54 -57 0 -89 86 -56 150 24 46 78 55
        112 18z"/>
        <path d="M6486 1623 c-4 -4 -38 -6 -77 -5 l-69 3 0 -180 0 -181 55 0 55 0 0
        124 c0 100 3 128 16 140 18 19 28 20 55 6 17 -10 19 -22 19 -140 l0 -130 55 0
        55 0 0 154 c0 85 -3 162 -6 171 -4 8 -19 22 -35 30 -29 16 -110 20 -123 8z"/>
        <path d="M7360 1611 c-63 -33 -99 -126 -85 -218 16 -109 143 -173 253 -127 40
        16 102 71 102 89 0 7 -18 20 -40 30 l-39 18 -30 -32 c-17 -18 -39 -31 -54 -31
        -31 0 -77 36 -77 61 0 18 8 19 123 19 l124 0 -8 57 c-9 63 -29 97 -79 131 -43
        29 -139 31 -190 3z m126 -69 c6 -4 16 -17 23 -29 12 -23 11 -23 -54 -23 -36 0
        -65 3 -65 7 0 4 10 17 22 30 21 23 53 29 74 15z"/>
        <path d="M7827 1624 c-4 -4 -40 -6 -82 -5 l-75 2 0 -181 0 -180 60 0 60 0 0
        130 c0 118 2 130 19 140 27 14 37 13 55 -6 13 -12 16 -40 16 -140 l0 -124 55
        0 55 0 0 156 0 156 -29 29 c-25 24 -38 29 -79 29 -27 0 -52 -3 -55 -6z"/>
        <path d="M8355 1616 c-87 -39 -123 -176 -72 -276 36 -73 124 -105 217 -80 44
        12 127 81 117 97 -3 4 -22 17 -42 27 l-36 20 -24 -26 c-13 -15 -34 -29 -45
        -33 -33 -10 -77 13 -89 46 l-10 29 125 0 124 0 0 38 c0 51 -37 122 -79 149
        -40 27 -136 31 -186 9z m123 -82 c41 -29 28 -44 -38 -44 -64 0 -72 8 -40 40
        24 24 48 25 78 4z"/>
        <path d="M8815 1615 c-24 -9 -41 -11 -43 -5 -2 6 -28 10 -58 10 l-54 0 0 -180
        0 -180 60 0 59 0 3 123 3 122 43 9 42 10 0 53 c0 29 -3 53 -7 53 -5 -1 -26 -7
        -48 -15z"/>
        <path d="M5770 1440 l0 -180 55 0 55 0 0 180 0 180 -55 0 -55 0 0 -180z"/>
        <path d="M2534 916 c-17 -8 -39 -24 -48 -37 -18 -26 -21 -100 -6 -129 12 -22
        75 -46 143 -55 54 -7 72 -29 42 -51 -26 -20 -62 -17 -112 7 -41 20 -43 20 -73
        3 -35 -21 -37 -34 -11 -58 79 -72 262 -54 296 28 22 52 18 82 -12 116 -23 24
        -42 33 -101 44 -84 15 -101 26 -77 50 22 22 50 20 96 -6 l39 -22 27 20 c39 30
        39 40 -6 70 -50 32 -148 43 -197 20z"/>
        <path d="M641 803 c-24 -65 -54 -146 -67 -180 l-24 -63 55 0 c50 0 55 2 61 25
        6 23 10 25 69 25 59 0 63 -2 69 -25 6 -23 11 -25 61 -25 l54 0 -30 83 c-16 45
        -46 126 -66 180 l-36 97 -51 0 -51 0 -44 -117z m124 -94 c5 -16 1 -19 -30 -19
        -31 0 -36 3 -30 18 3 9 12 37 18 61 l12 44 12 -43 c7 -24 15 -51 18 -61z"/>
        <path d="M1120 885 c0 -35 0 -35 45 -35 45 0 45 0 45 35 0 35 0 35 -45 35 -45
        0 -45 0 -45 -35z"/>
        <path d="M3800 789 c0 -158 11 -192 74 -220 52 -24 110 -24 163 0 64 30 73 56
        73 216 l0 135 -50 0 -49 0 -3 -137 -3 -136 -28 -10 c-21 -7 -34 -5 -52 7 -24
        16 -25 19 -25 146 l0 130 -50 0 -50 0 0 -131z"/>
        <path d="M4430 885 c0 -35 0 -35 45 -35 45 0 45 0 45 35 0 35 0 35 -45 35 -45
        0 -45 0 -45 -35z"/>
        <path d="M5550 885 c0 -35 0 -35 45 -35 45 0 45 0 45 35 0 35 0 35 -45 35 -45
        0 -45 0 -45 -35z"/>
        <path d="M2820 860 c0 -33 -3 -40 -20 -40 -15 0 -20 -7 -20 -25 0 -18 5 -25
        20 -25 19 0 20 -7 20 -95 0 -108 5 -115 84 -115 46 0 46 0 46 34 0 28 -4 35
        -22 38 -21 3 -23 9 -26 71 -3 66 -3 67 23 67 20 0 25 5 25 25 0 20 -5 25 -25
        25 -22 0 -25 4 -25 40 l0 40 -40 0 -40 0 0 -40z"/>
        <path d="M3260 860 c0 -33 -3 -40 -20 -40 -15 0 -20 -7 -20 -25 0 -18 5 -25
        20 -25 18 0 20 -7 20 -83 0 -110 12 -127 86 -127 l54 0 0 35 c0 31 -3 35 -25
        35 -24 0 -25 2 -25 70 0 68 1 70 25 70 20 0 25 5 25 25 0 20 -5 25 -25 25 -22
        0 -25 4 -25 40 l0 40 -45 0 -45 0 0 -40z"/>
        <path d="M5700 860 c0 -33 -3 -40 -20 -40 -15 0 -20 -7 -20 -25 0 -18 5 -25
        20 -25 18 0 20 -7 20 -83 0 -108 12 -127 81 -127 l49 0 0 35 c0 28 -4 35 -20
        35 -18 0 -20 7 -20 70 0 68 1 70 25 70 20 0 25 5 25 25 0 20 -5 25 -25 25 -22
        0 -25 4 -25 40 l0 40 -45 0 -45 0 0 -40z"/>
        <path d="M1581 822 c-53 -27 -75 -64 -75 -126 0 -61 19 -97 67 -126 59 -36
        152 -20 195 35 31 40 31 129 -1 176 -37 55 -122 74 -186 41z m100 -71 c43 -35
        20 -131 -32 -131 -23 0 -59 46 -59 77 0 23 40 73 58 73 6 0 20 -8 33 -19z"/>
        <path d="M1957 834 c-3 -4 -36 -6 -72 -5 l-65 1 0 -135 0 -135 45 0 44 0 3 97
        c3 87 5 98 22 101 33 7 46 -25 46 -115 l0 -83 40 0 40 0 0 118 c0 101 -3 121
        -17 134 -20 18 -76 32 -86 22z"/>
        <path d="M2163 829 c-32 -9 -63 -42 -63 -66 0 -18 80 -16 104 2 14 11 23 12
        33 4 23 -20 15 -27 -41 -39 -69 -14 -106 -47 -106 -93 0 -19 9 -45 19 -58 16
        -20 28 -24 73 -22 29 0 76 1 103 1 l50 1 -3 113 c-2 62 -8 121 -13 130 -9 18
        -68 39 -104 37 -11 0 -34 -5 -52 -10z m87 -157 c0 -4 -7 -18 -16 -30 -18 -27
        -57 -30 -52 -5 4 24 68 56 68 35z"/>
        <path d="M3043 832 c-34 -11 -63 -39 -63 -62 0 -17 7 -20 41 -20 22 0 47 7 55
        15 16 16 44 10 44 -10 0 -14 -11 -19 -67 -30 -56 -11 -83 -40 -83 -90 0 -36 5
        -48 28 -65 22 -18 35 -21 72 -16 25 4 68 6 95 6 l50 -1 -5 117 c-5 110 -6 118
        -30 135 -28 21 -102 32 -137 21z m72 -181 c-10 -32 -65 -40 -65 -10 0 10 62
        40 68 34 2 -2 1 -13 -3 -24z"/>
        <path d="M3480 822 c-50 -24 -72 -73 -67 -145 3 -49 8 -63 34 -89 55 -55 167
        -50 213 10 26 33 25 37 -10 52 -28 11 -33 10 -54 -9 -26 -25 -58 -27 -80 -5
        -29 28 -17 34 75 34 l92 0 -5 50 c-6 56 -26 86 -75 106 -43 19 -81 18 -123 -4z
        m100 -67 c18 -22 9 -27 -41 -23 -41 3 -42 4 -25 21 22 21 49 22 66 2z"/>
        <path d="M4288 834 c-4 -3 -37 -6 -73 -5 l-65 1 0 -135 0 -135 45 0 45 0 0 84
        c0 100 5 116 35 116 30 0 35 -16 35 -116 l0 -84 40 0 40 0 0 118 c0 102 -3
        121 -18 135 -21 19 -73 32 -84 21z"/>
        <path d="M4895 833 c-54 -14 -95 -76 -95 -144 0 -38 22 -89 48 -113 23 -20 96
        -32 136 -22 30 7 86 53 86 71 0 7 -14 18 -30 25 -28 12 -33 11 -51 -9 -26 -28
        -66 -24 -87 7 l-14 22 97 0 97 0 -7 43 c-17 99 -84 144 -180 120z m69 -69 c9
        -3 16 -12 16 -20 0 -10 -13 -14 -47 -14 -45 0 -46 0 -28 20 19 21 33 24 59 14z"/>
        <path d="M5355 833 c-50 -12 -83 -71 -65 -117 11 -30 37 -45 93 -54 27 -5 42
        -13 42 -22 0 -24 -45 -24 -77 0 l-30 22 -24 -23 c-32 -30 -30 -41 9 -64 46
        -28 146 -27 184 1 38 29 51 76 29 109 -19 28 -38 39 -104 55 -23 6 -40 15 -37
        20 9 15 48 12 71 -4 18 -13 23 -12 50 9 26 21 27 25 14 38 -31 29 -101 43
        -155 30z"/>
        <path d="M940 695 l0 -135 40 0 40 0 0 79 c0 87 12 111 56 111 21 0 24 4 24
        40 0 34 -3 40 -21 40 -11 0 -29 -5 -40 -10 -13 -7 -19 -7 -19 0 0 5 -18 10
        -40 10 l-40 0 0 -135z"/>
        <path d="M1120 695 l0 -135 45 0 45 0 0 135 0 135 -45 0 -45 0 0 -135z"/>
        <path d="M1260 795 l0 -35 57 0 57 0 -67 -68 c-55 -55 -67 -73 -67 -100 l0
        -32 125 0 125 0 0 35 0 35 -62 0 -61 0 61 64 c52 54 62 70 62 100 l0 36 -115
        0 -115 0 0 -35z"/>
        <path d="M4430 695 l0 -135 45 0 45 0 0 135 0 135 -45 0 -45 0 0 -135z"/>
        <path d="M4544 813 c3 -10 23 -70 44 -133 l39 -115 46 -3 46 -3 40 125 c23 69
        41 130 41 136 0 5 -19 10 -43 10 l-43 0 -20 -82 -20 -83 -18 83 -19 82 -49 0
        c-42 0 -49 -2 -44 -17z"/>
        <path d="M5110 695 l0 -135 39 0 39 0 3 85 c4 91 12 105 57 105 19 0 22 5 22
        40 0 34 -3 40 -21 40 -11 0 -29 -5 -40 -10 -13 -7 -19 -7 -19 0 0 5 -18 10
        -40 10 l-40 0 0 -135z"/>
        <path d="M5550 695 l0 -135 45 0 45 0 0 135 0 135 -45 0 -45 0 0 -135z"/>
        <path d="M5860 818 c0 -7 18 -69 39 -138 21 -69 37 -128 34 -132 -2 -5 -15 -8
        -29 -8 -21 0 -24 -5 -24 -35 l0 -35 50 0 c36 0 54 5 67 19 16 17 63 147 109
        299 l13 42 -48 0 -48 0 -18 -82 -19 -83 -19 83 -19 82 -44 0 c-29 0 -44 -4
        -44 -12z"/>
        </g>
        </svg>
        <p class="opacity-60 text-sm">A research unit of <a class="underline" href="https://thecollege.asu.edu/">The College of Liberal Arts and Sciences</a>.</p>
      </div>
      <div class="w-full sm:w-1/2 flex flex-col space-y-4">
        <a class="opacity-60" href="https://biokic.asu.edu/blogs">BioKIC Blog</a>
        <a class="opacity-60" href="https://www.asu.edu/">ASU</a>
        <a class="opacity-60" href="../about.html">JEDI Program</a>
      </div>
    </div>
    <div class="opacity-60 pt-2">
      <p class="text-center text-xs mt-4">built by <a href="https://laura.rochaprado.com">Laura Rocha Prado</a> as part as the program &middot 2021</p>
    </div>
  </div>
</div>
    `;
  }
}
customElements.define("footer-component", Footer);
