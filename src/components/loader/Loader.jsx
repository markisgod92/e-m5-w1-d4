import BeatLoader from 'react-spinners/BeatLoader'

export const Loader = () => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <BeatLoader color="#198754" size={24} />
        </div>
    )
}
