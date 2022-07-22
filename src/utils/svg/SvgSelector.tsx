import SvgIcon from "./svgIcon.enum";

interface IProps {
    iconName: SvgIcon;
    color?: string;
}

const SvgSelector = ({ iconName, color = "#000000" }: IProps) => {
    switch (iconName) {
        case SvgIcon.ACCURACY:
            return (
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64.000000pt"
                    height="64.000000pt"
                    viewBox="0 0 64.000000 64.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M481 606 c-31 -32 -33 -38 -27 -77 6 -34 3 -46 -14 -64 l-20 -22 -57
                            29 c-251 127 -487 -198 -288 -397 199 -199 523 37 397 288 l-29 57 22 20 c18
                            17 30 20 64 14 39 -6 45 -4 77 27 19 18 34 39 34 46 0 7 -17 17 -39 24 -32 10
                            -40 18 -50 50 -7 22 -17 39 -24 39 -7 0 -28 -15 -46 -34z m76 -82 c21 -6 23
                            -8 10 -21 -35 -36 -98 25 -65 64 11 13 13 12 21 -11 5 -16 19 -29 34 -32z
                            m-219 -84 c44 -20 51 -30 28 -49 -10 -8 -23 -7 -52 5 -131 55 -266 -77 -211
                            -207 8 -20 32 -49 53 -65 31 -24 47 -29 95 -29 62 0 94 17 132 67 27 36 33
                            105 13 152 -12 29 -13 42 -5 52 19 23 29 16 49 -28 49 -109 -2 -236 -112 -282
                            -166 -70 -342 106 -272 272 46 110 173 161 282 112z m-37 -81 c19 -10 19 -12
                            5 -28 -11 -12 -26 -16 -47 -13 -37 5 -79 -29 -79 -65 0 -31 42 -73 73 -73 36
                            0 70 42 65 79 -3 21 1 36 13 47 16 14 18 14 28 -5 29 -53 1 -129 -57 -157
                            -100 -47 -205 58 -158 157 28 59 104 87 157 58z m-23 -107 c4 -28 -24 -40 -45
                            -19 -21 21 -9 49 19 45 15 -2 24 -11 26 -26z"
                        />
                    </g>
                </svg>
            );
        case SvgIcon.RESTART:
            return (
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="128.000000pt"
                    height="128.000000pt"
                    viewBox="0 0 128.000000 128.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M490 1210 c-230 -36 -428 -222 -476 -449 -70 -330 154 -645 492 -692
                            86 -12 121 -1 142 44 11 23 11 34 2 58 -16 39 -33 47 -122 59 -187 26 -326
                            161 -359 348 -21 121 27 266 117 355 162 160 423 159 584 -2 l55 -55 -40 -17
                            c-120 -53 -135 -62 -135 -77 0 -9 4 -22 8 -28 10 -15 363 -261 396 -275 22
                            -10 29 -10 41 2 8 9 28 108 51 257 47 313 55 300 -138 218 l-36 -15 -42 54
                            c-121 157 -343 245 -540 215z"
                        />
                    </g>
                </svg>
            );
        case SvgIcon.SPEED:
            return (
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64.000000pt"
                    height="64.000000pt"
                    viewBox="0 0 64.000000 64.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                        fill={color}
                        stroke="none"
                    >
                        <path
                            d="M316 348 c-73 -151 -86 -185 -78 -203 14 -30 47 -37 73 -16 16 13 31
                            60 65 205 50 214 47 196 36 196 -5 0 -48 -82 -96 -182z m-11 -182 c0 -22 -14
                            -29 -34 -17 -19 12 -6 43 16 39 10 -2 18 -12 18 -22z"
                        />
                        <path
                            d="M205 464 c-61 -22 -82 -41 -68 -62 12 -19 26 -19 96 -1 44 12 47 14
                            47 46 0 38 -11 40 -75 17z"
                        />
                        <path d="M308 444 c-6 -50 8 -52 32 -4 l20 40 -24 0 c-20 0 -24 -6 -28 -36z" />
                        <path
                            d="M412 418 c-17 -68 0 -78 37 -21 22 35 23 37 5 50 -27 19 -31 17 -42
                            -29z"
                        />
                        <path
                            d="M479 393 c-39 -47 -39 -47 -9 -91 16 -24 30 -48 32 -53 2 -6 26 -1
                            55 12 60 24 60 28 -4 107 -38 46 -52 51 -74 25z"
                        />
                        <path
                            d="M73 368 c-23 -25 -53 -81 -53 -98 0 -23 29 -7 55 30 16 23 35 45 44
                            49 13 8 13 12 2 25 -18 21 -24 20 -48 -6z"
                        />
                        <path
                            d="M558 233 l-48 -14 0 -55 0 -54 65 0 65 0 -1 38 c-2 52 -12 95 -24 98
                            -5 1 -31 -5 -57 -13z"
                        />
                        <path d="M7 234 c-10 -10 -9 -124 2 -124 11 0 22 113 12 123 -4 4 -10 4 -14 1z" />
                    </g>
                </svg>
            );

        case SvgIcon.LOADER:
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    // @ts-ignore
                    style={{
                        margin: "auto",
                        background: "white",
                        display: "block",
                        shapeRendering: "auto",
                    }}
                    width="200px"
                    height="200px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                >
                    <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        stroke="#ee755d"
                        strokeWidth="10"
                        r="35"
                        strokeDasharray="164.93361431346415 56.97787143782138"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="1s"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                        ></animateTransform>
                    </circle>
                </svg>
            );
        default:
            return <></>;
    }
};

export default SvgSelector;
