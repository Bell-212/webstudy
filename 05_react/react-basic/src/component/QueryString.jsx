import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QueryString = () => {

  // Query String 형식으로 넘어오는 파라미터를 받는 함수 : useSearchParams()

  // querystring?name=홍길동&age=30

  const [params] = useSearchParams();
  console.log(params);

  const name = params.get('name');
  const age = params.get('age');

  return (
    <div className='query-string'>
      <h4>Query String</h4>
      <h4>이름 : {name}</h4>
      <h4>나이 : {age}</h4>
    </div>
  );
};

export default QueryString;