import Information from '../../components/Information'
import { useState } from 'react'
const information = [
    ["姓名", "LH"],
    ["性别", "男"],
    ["政治面貌", "共青团员"],
    ["年龄", "24"],
    ["邮箱", "11"],
]

export default function Template() {
    // const updateInfo = (
    //     <div>

    //     </div>
    // )
    const [emit, setEmit] = useState(true);
    function change(e: Event, index: number) {
        information[index][1] = e.target.value;
        setEmit(!emit);
    }
    function clickEvent() {
        information.push(["1", "b"])
        setEmit(!emit);
    }
    return (
        <>
            <button onClick={() => clickEvent()}>111</button>
            <div className=''>
                {
                    information.map((item, index) => {
                        return <div key={index}>
                            {item[0]}
                            <input type="text" onChange={(e) => change(e, index)} value={item[1]} />
                        </div>
                    })
                }
            </div>
            <div className='w-[51.25rem] h-[72.5rem] shadow-2xl'>
                <Information information={information} />
            </div>
        </>
    )
}