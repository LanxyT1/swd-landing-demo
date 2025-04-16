import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <path
            fill="url(#c)"
            stroke="#000"
            strokeWidth={1.2}
            d="m28.321 23.345.427.002.142-.403a4.633 4.633 0 0 1 6.775-2.422 4.64 4.64 0 1 1-6.78 5.522l-.14-.397-.422-.002c-5.77-.029-10.018-.284-13.101-1.873l-.004-.001a14.449 14.449 0 0 1-4.27-3.297L9.9 19.291V30.496l.4.142a4.65 4.65 0 1 1-3.1 0l.4-.142V13.255l-.399-.142a4.664 4.664 0 1 1 3.258-.048l-.472.183.102.496a11.452 11.452 0 0 0 6.195 7.986c1.377.71 3.09 1.101 5.085 1.323 2 .223 4.33.28 6.952.292ZM9.649 32.829l-.23.554.23-.554a2.35 2.35 0 0 0-2.56.51l.41.41-.41-.41a2.35 2.35 0 1 0 2.56-.51ZM7.444 10.704a2.35 2.35 0 1 0 2.612-3.908 2.35 2.35 0 0 0-2.612 3.908Zm24.5 15.75a2.35 2.35 0 1 0 2.612-3.909 2.35 2.35 0 0 0-2.612 3.909Z"
        />
        <defs>
            <linearGradient
                id="c"
                x1={21}
                x2={21}
                y1={3.455}
                y2={40.272}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#95C6FF" />
                <stop offset={1} stopColor="#4E55E3" />
            </linearGradient>
        </defs>
    </svg>
)
export default SvgComponent
