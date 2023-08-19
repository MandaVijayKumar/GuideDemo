import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";



function Client() {
  const [users, setUsers] = useState(0);
  const [Questions, setQuestion] = useState([]);
  const [questionId, setQuestionId] = useState(1);



  const handler = (questionId, title, predicate, argument, option, score) => {
    console.log(predicate, argument, option, score);
    setQuestionId(prev => prev + 1);
    axios.post('http://127.0.0.1:5000/data', { questionId, title, predicate, argument, option, score },{
      onDownloadProgress: function (progressEvent) {
    console.log(progressEvent)
      },
    
    })
      .then(data => {
        console.log(data)

      })
      .catch(err => console.log(err));


  }

  //submit handler...
   const submitHandler = () => {

    axios.post('http://127.0.0.1:5000/submit', {users:users})
    .then(res => {
      console.log('successfully submited',res.data.totalScore);
      if (res.data.success){
        res.data.questions.map(question => {
          console.log(question.title, question.option)
        })

      }

    })
    .catch(err => console.log('error of submit'))
   }

  useEffect(() => {

    axios.get('http://127.0.0.1:5000/questions',{})
      .then(res => setQuestion(res.data))
      .catch(err => console.log('error while fetching questions'));


    axios.get('http://127.0.0.1:5000/find')
      .then(res => {
        if (res.data.success) setUsers(res.data.totalCount + 1);
      })
      .catch(error => console.log('count error'));

    // alanBtn({
    //   key: '12aa68f90b39e4cc4651b0d8e336f2a12e956eca572e1d8b807a3e2338fdd0dc/stage',
    //   onCommand: ({command}) => {
    //       if(command === 'test command') {
    //         console.log('alan testing');
    //       }
    //   }
    // });




  }, []);

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-sm-12">
          <div className="">
            <h1 className="text-end">total users: {users}</h1>

            {
              Questions.filter(question => question.id === questionId).map(question => {
                if (question.id === 4) {
                  return (
                    <div> <button className="btn btn-success" onClick={submitHandler}>sumbit</button> </div>
                  )
                } else {
                  return (
                    <div className="m-auto" style={{display:'flex', flexDirection:'column',justifyContent:'center', height:'100vh' }}>
                      <div className="container-fluid text-center">
                        <h4 className="text-white">{question.title}</h4>
                      </div>
                      <div className="text-center">
                        {
                          question.options.map(option => (
                            <div className="m-3">
                            <button className=" text-white btn btn-secondary btn-sm mx-2" style={{boxShadow:'1px 1px 2px 2px white', width: '200px'}} onClick={() => handler(question.id, question.title, question.predicate, question.argument, option.a, option.score)}>{option.a}</button>
                            </div>
                          ))
                        }
                      </div>


                    </div>
                  )
                }



              })
            }

            {/* // <button className="btn btn-primary btn-sm" onClick={submitHandler}>submit</button> */}
          </div>

        </div>

      </div>
    </div>

  );
}

export default Client