/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetModels, selectedModels } from '../features/models/ModelSlice'
import { GetGender, selectedGenders } from '../features/gender/GenderSlice'

const Model = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const genderQuery = +searchParams.get("gender")

    const models = useSelector(selectedModels)
    const gender = useSelector(selectedGenders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetGender())
        dispatch(GetModels());
    }, [])

    return (
        <section className="flex flex-wrap items-center justify-center gap-8 mt-10">
            <div className="grid">
                {gender.map(({ id, name, img }) => (
                    <img
                        className="shadow-md p-6 mb-3 rounded-lg opacity-100 cursor-pointer transition-all duration-300 mx-8 select-none bg-white outline-none"
                        key={id}
                        src={img}
                        onClick={() => setSearchParams({ gender: id })}
                        alt={name}
                    />
                ))}
            </div>
            {models.map(({ id, name, img, parentId }) => (
                genderQuery === parentId && (
                    <div key={id} className='text-center outline-none font-medium tracking-widest text-lg cursor-default select-none '>
                        <img
                            className="shadow-2xl p-6 rounded-xl w-60 mb-4"
                            key={id}
                            src={img}
                            alt={name}
                        />
                        {name}
                    </div>
                )
            ))}
        </section>
    )
}

export default Model