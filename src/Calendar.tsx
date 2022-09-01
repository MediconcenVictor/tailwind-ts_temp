import './css/Calendar.css';

export function Calendar() {
    return (
        <div className='bg-white width-full h-24'>
            {/* <div className='flex gap-3'> this is OK*/}
            <div className='flex gap-144'>{/* extends don't work*/}
                <button>Cancel</button>
                <button>OK</button>
            </div>
        </div>
    );
}