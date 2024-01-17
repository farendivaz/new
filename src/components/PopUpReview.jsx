export default function PopUpReview(props) {
    return (
        <>
            <div onClick={props.isHide} className={`fixed inset-0 z-50 items-center ${props.isShow ? '' : 'hidden'} justify-center bg-black bg-opacity-50 modal`}
                id="modal-1">
                <div className="fixed flex items-center justify-center w-full h-full">
                    <div
                        className="flex flex-col items-center w-11/12 max-w-lg max-h-[400px] mx-auto shadow-lg lg:w-2/3 lg:h-1/2 lg:max-w-[1200px] lg:max-h-[350px] xl:max-h-[400px] 2xl:max-h-[600px] rounded-2xl backdrop-blur-xl bg-white/50">
                        <div className="flex items-center justify-between w-full gap-1 mx-auto">
                            <div className="flex items-center justify-end w-[90%] mx-auto">
                                <img className="w-1/4 my-4 ml-4 rounded-full md:w-1/6 md:ml-8" src="https://demo.fitaja.id//storage/testimonies/fVF4q7efe1R6e5ub34ZUXZHEY2oWoJ7tRy1Nd274.png"
                                    alt="PERSON"></img>
                                <h1
                                    className="flex items-center justify-start w-3/4 pl-4 my-auto text-xl font-medium text-center md:w-5/6 md:text-2xl name-modal">
                                    Doe John</h1>
                            </div>
                            <div onClick={props.isHide} className="flex self-start justify-end w-[10%] mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 p-3 text-right rounded-full close-modal hover:cursor-pointer hover:bg-neutral-300 hover:text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <p className="w-11/12 pb-8 mx-auto text-left break-words lg:pb-4 lg:text-lg">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}