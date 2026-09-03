import { useNavigate } from "react-router";

const EmptyWishlist = () => {
       const navigate = useNavigate();

    return (
        <div className="min-h-[500px] flex items-center justify-center px-4 py-10">

            {/* 3D Card */}
            <div
                className="
                    relative w-full max-w-2xl
                    rounded-3xl
                    border border-base-300
                    bg-base-200
                    px-6 py-12 sm:px-12
                    text-center
                    shadow-[0_20px_0_0_rgba(0,0,0,0.08),0_25px_50px_rgba(0,0,0,0.12)]
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_25px_0_0_rgba(0,0,0,0.08),0_35px_60px_rgba(0,0,0,0.15)]
                "
            >

                {/* Decorative circles */}
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary/20 blur-sm"></div>

                <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-secondary/20 blur-sm"></div>


                {/* Book Icon */}
                <div
                    className="
                        mx-auto mb-7
                        flex h-24 w-24 items-center justify-center
                        rounded-2xl
                        bg-primary
                        text-primary-content
                        text-5xl
                        shadow-[0_8px_0_0_color-mix(in_srgb,var(--color-primary)_60%,black)]
                        rotate-[-3deg]
                    "
                >
                    📚
                </div>


                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
                    Your Wishlist is Waiting!
                </h2>


                {/* Description */}
                <p className="max-w-lg mx-auto text-base-content/70 leading-7">
                    Your wishlist is feeling a little empty right now.
                    Discover amazing books, save the ones you love,
                    and create your own personal collection for later.
                </p>


                {/* Quote / Highlight */}
                <div className="mt-7 mb-8">
                    <p className="inline-block rounded-full bg-base-100 border border-base-300 px-5 py-2 text-sm font-medium text-primary shadow-sm">
                        ✨ Every great reading journey starts with one book.
                    </p>
                </div>


                {/* Button */}
                <button  onClick={() => navigate("/")}
                    className="
                        btn btn-primary
                        rounded-xl px-7
                        shadow-[0_5px_0_0_color-mix(in_srgb,var(--color-primary)_60%,black)]
                        hover:translate-y-1
                        hover:shadow-[0_2px_0_0_color-mix(in_srgb,var(--color-primary)_60%,black)]
                        transition-all duration-200
                    "
                >
                    🔍 Explore Books
                </button>

            </div>
        </div>
    );
};

export default EmptyWishlist;