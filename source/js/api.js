const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

const Method = {
  POST: `POST`,
};

let user = {
  name: 'John',
  surname: 'Smith'
};

const sendMail=()=>{
  let response =  fetch('http://localhost:3000/', {
    method: Method.POST,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

};
