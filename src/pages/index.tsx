import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../services/api';

type FormData = {
  value: string;
};
export default function Home() {
  const [searchData, setSearchData] = useState<any>();
  const { handleSubmit, register } = useForm();

  const handleSearch = async (data: FormData) => {
    try {
      const response = await api.post('/teste');
      console.log(
        '🚀 ~ file: index.tsx:17 ~ handleSearch ~ response:',
        response,
      );

      setSearchData(response.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem',
      }}
    >
      <form onSubmit={handleSubmit(handleSearch)}>
        <input type="text" {...register('value')} />
        <button type="submit">Search</button>
      </form>
      <div>{searchData?.data.value}</div>
    </div>
  );
}
