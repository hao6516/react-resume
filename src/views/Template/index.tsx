import Information from '../../components/Information'

export default function Template() {
    const information = [
        ["姓名", "LH"],
        ["性别", "男"],
        ["政治面貌", "共青团员"],
        ["年龄", "24"],
        ["邮箱", "11"],
    ]
    return (
        <div className='w-[51.25rem] h-[72.5rem] shadow-2xl'>
            <Information information={information} />
        </div>
    )
}