import style from './Search.module.css';
import searchImg from '../../../assets/images/header-search.png';
import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from 'react';
import { getSerchFilm } from '../../../api/api';

const Search = (props) => {
	const [term, setTerm] = useState('')

	const submit = (values, { setSubmitting }) => {
		setTerm(values.term)
		setSubmitting(false)
	}

	useEffect(() => {
		getSerchFilm(term).then(data => {
			console.log(data)
		})
	}, [term])

	return (
		<Formik
			initialValues={{ term: '' }}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className={style.input}>
						<Field type="text" name="term" className={style.input_area} />
						<button type="submit" disabled={isSubmitting} className={style.button}>
							<img src={searchImg} alt="search" width="16px" height="16px" />
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};


export default Search;