import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={252}
        height={300}
        fill="none"
        {...props}
    >
        <path
            fill="url(#transportBlur)"
            d="M126 0C63 0 0 7.895 0 63.158v150c0 30.474 24.727 55.263 55.125 55.263l-18.112 18.158C32.13 291.474 35.595 300 42.683 300H59.85c2.047 0 4.095-.789 5.512-2.368L94.5 268.421h63l29.138 29.211c1.417 1.421 3.465 2.368 5.512 2.368h17.168c7.087 0 10.552-8.526 5.512-13.421l-17.955-18.158c30.397 0 55.125-24.789 55.125-55.263v-150C252 7.895 189 0 126 0ZM55.125 236.842c-13.072 0-23.625-10.579-23.625-23.684s10.553-23.684 23.625-23.684c13.073 0 23.625 10.579 23.625 23.684s-10.552 23.684-23.625 23.684Zm55.125-110.526H31.5V63.158h78.75v63.158Zm86.625 110.526c-13.072 0-23.625-10.579-23.625-23.684s10.553-23.684 23.625-23.684 23.625 10.579 23.625 23.684-10.553 23.684-23.625 23.684ZM220.5 126.316h-78.75V63.158h78.75v63.158Z"
            opacity={0.52}
        />
        <defs>
            <linearGradient
                id="transportBlur"
                x1={126}
                x2={126}
                y1={0}
                y2={300}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#727272" />
                <stop offset={1} stopColor="#00D9FF" />
            </linearGradient>
        </defs>
    </svg>
)
export default SvgComponent
