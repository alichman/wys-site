import '../App.css'
import './bios.css'
import testImage from '../assets/DSC09360.png'

type person = {
    name: String;
    short: String;
    long: String;
    img: String;
}

export default function Bios() {
    const topRow = ['Bridgit',
                   'Gabriella',
                   'Bella',
                   'Andrew']
    const bottomRow = ['Vincent',
                        'Benedict',
                        'Evan',
                        'Hubert']

    return (
        <div className='bio-main'>
            <h1>Meet the Members</h1>
            <div className='bio-row'>{topRow.map((p) => Bio(andrew()))}</div>
            <div className='bio-row'>{bottomRow.map((p) => Bio(andrew()))}</div>
        </div>
    )
}

// Individual bio
function Bio(p: person) {
    return <div className='bio-single'>
        <img src={p.img as string} alt={'WYS '+p.name}/>
        <div className='text-square'>
            <h2>{p.name}</h2>
            <p>{p.short}</p>
        </div>
    </div>
}


// Content section
function andrew():person {
    return {
        name: 'Andrew',
        short: 'The Horns',
        long: 'The Horns, but extra long',
        img: testImage
    }
}