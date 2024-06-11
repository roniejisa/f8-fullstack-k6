"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LogoIcon = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted)
        return (
            <svg
                id="svg"
                version="1.1"
                width="40"
                height="40"
                viewBox="289.1166687011719 286.3141784667969 446.1883239746094 451.6679382324219"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M483.463 287.939 C 444.227 294.082,412.133 307.510,380.249 331.123 C 368.755 339.636,348.433 359.202,339.350 370.500 C 307.695 409.880,290.721 456.014,289.276 506.608 C 288.663 528.046,289.762 541.927,293.567 560.847 C 308.426 634.716,362.683 698.218,433.357 724.454 C 458.831 733.910,482.709 738.008,512.182 737.982 C 549.886 737.948,579.777 731.163,610.764 715.606 C 632.145 704.872,648.273 693.565,664.367 678.027 C 706.607 637.246,731.562 583.005,734.649 525.269 L 735.305 513.000 726.652 513.000 L 718.000 513.000 718.000 507.051 C 718.000 490.148,711.391 458.083,703.999 439.117 C 687.486 396.756,656.870 359.721,619.467 336.865 L 611.275 331.859 617.641 322.404 L 624.007 312.948 615.254 308.852 C 594.670 299.221,572.368 292.166,550.500 288.368 C 535.902 285.832,498.450 285.593,483.463 287.939 M525.917 311.387 C 525.688 311.600,520.168 312.288,513.651 312.916 C 459.249 318.159,408.368 344.030,375.194 383.315 C 349.932 413.232,333.914 448.651,328.392 486.804 C 326.368 500.790,326.909 534.802,329.361 547.811 C 336.767 587.095,354.632 621.492,381.830 648.837 C 428.231 695.488,492.168 714.653,557.521 701.500 C 590.436 694.876,627.420 676.565,654.500 653.486 L 663.500 645.816 653.000 656.160 C 604.230 704.208,537.426 722.981,468.592 707.982 C 400.462 693.135,343.419 638.496,324.055 569.533 C 306.284 506.245,320.004 438.502,361.023 387.000 C 369.700 376.106,387.112 359.213,398.000 351.124 C 427.746 329.025,462.624 315.758,500.500 312.132 C 510.022 311.220,526.620 310.734,525.917 311.387 M571.426 408.515 C 586.522 411.148,597.400 416.681,607.908 427.074 C 615.101 434.187,620.179 442.248,623.089 451.172 C 626.377 461.256,626.450 477.294,623.255 487.500 C 616.744 508.301,598.870 524.407,576.462 529.666 L 569.444 531.313 599.472 560.916 C 615.987 577.198,634.000 594.896,639.500 600.246 L 649.500 609.974 627.265 609.987 L 605.030 610.000 569.236 574.750 C 549.550 555.363,524.793 531.020,514.221 520.656 C 503.650 510.292,495.000 501.650,495.000 501.451 C 495.000 501.253,511.763 500.958,532.250 500.796 C 568.084 500.511,569.679 500.417,574.217 498.321 C 581.429 494.989,588.575 487.752,590.968 481.355 C 596.889 465.530,590.301 449.255,575.086 442.120 L 569.500 439.500 511.262 439.000 L 453.023 438.500 438.012 423.513 C 429.755 415.269,423.000 408.182,423.000 407.763 C 423.000 407.343,454.441 407.000,492.869 407.000 C 550.793 407.000,564.223 407.259,571.426 408.515 M481.255 465.709 L 486.011 470.580 485.755 561.501 L 485.500 652.423 471.250 652.461 L 457.000 652.500 457.000 547.640 L 457.000 442.780 466.750 451.809 C 472.113 456.775,478.640 463.029,481.255 465.709"
                    stroke="none"
                    fill={"white"}
                    fillRule="evenodd"
                ></path>
            </svg>
        );
    return (
        <svg
            id="svg"
            version="1.1"
            width="40"
            height="40"
            viewBox="289.1166687011719 286.3141784667969 446.1883239746094 451.6679382324219"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M483.463 287.939 C 444.227 294.082,412.133 307.510,380.249 331.123 C 368.755 339.636,348.433 359.202,339.350 370.500 C 307.695 409.880,290.721 456.014,289.276 506.608 C 288.663 528.046,289.762 541.927,293.567 560.847 C 308.426 634.716,362.683 698.218,433.357 724.454 C 458.831 733.910,482.709 738.008,512.182 737.982 C 549.886 737.948,579.777 731.163,610.764 715.606 C 632.145 704.872,648.273 693.565,664.367 678.027 C 706.607 637.246,731.562 583.005,734.649 525.269 L 735.305 513.000 726.652 513.000 L 718.000 513.000 718.000 507.051 C 718.000 490.148,711.391 458.083,703.999 439.117 C 687.486 396.756,656.870 359.721,619.467 336.865 L 611.275 331.859 617.641 322.404 L 624.007 312.948 615.254 308.852 C 594.670 299.221,572.368 292.166,550.500 288.368 C 535.902 285.832,498.450 285.593,483.463 287.939 M525.917 311.387 C 525.688 311.600,520.168 312.288,513.651 312.916 C 459.249 318.159,408.368 344.030,375.194 383.315 C 349.932 413.232,333.914 448.651,328.392 486.804 C 326.368 500.790,326.909 534.802,329.361 547.811 C 336.767 587.095,354.632 621.492,381.830 648.837 C 428.231 695.488,492.168 714.653,557.521 701.500 C 590.436 694.876,627.420 676.565,654.500 653.486 L 663.500 645.816 653.000 656.160 C 604.230 704.208,537.426 722.981,468.592 707.982 C 400.462 693.135,343.419 638.496,324.055 569.533 C 306.284 506.245,320.004 438.502,361.023 387.000 C 369.700 376.106,387.112 359.213,398.000 351.124 C 427.746 329.025,462.624 315.758,500.500 312.132 C 510.022 311.220,526.620 310.734,525.917 311.387 M571.426 408.515 C 586.522 411.148,597.400 416.681,607.908 427.074 C 615.101 434.187,620.179 442.248,623.089 451.172 C 626.377 461.256,626.450 477.294,623.255 487.500 C 616.744 508.301,598.870 524.407,576.462 529.666 L 569.444 531.313 599.472 560.916 C 615.987 577.198,634.000 594.896,639.500 600.246 L 649.500 609.974 627.265 609.987 L 605.030 610.000 569.236 574.750 C 549.550 555.363,524.793 531.020,514.221 520.656 C 503.650 510.292,495.000 501.650,495.000 501.451 C 495.000 501.253,511.763 500.958,532.250 500.796 C 568.084 500.511,569.679 500.417,574.217 498.321 C 581.429 494.989,588.575 487.752,590.968 481.355 C 596.889 465.530,590.301 449.255,575.086 442.120 L 569.500 439.500 511.262 439.000 L 453.023 438.500 438.012 423.513 C 429.755 415.269,423.000 408.182,423.000 407.763 C 423.000 407.343,454.441 407.000,492.869 407.000 C 550.793 407.000,564.223 407.259,571.426 408.515 M481.255 465.709 L 486.011 470.580 485.755 561.501 L 485.500 652.423 471.250 652.461 L 457.000 652.500 457.000 547.640 L 457.000 442.780 466.750 451.809 C 472.113 456.775,478.640 463.029,481.255 465.709"
                stroke="none"
                fill={resolvedTheme === "light" ? "black" : "white"}
                fillRule="evenodd"
            ></path>
        </svg>
    );
};

export default LogoIcon;