
import ProtectedPage from './../../layouts/ProtectedPage';
import Main from './../../layouts/dashborad/Main';
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StateContext, DispatchContext } from '../../../utils/context/MainContext';
import React, { useContext, useEffect, useState } from 'react';
import ListAction from '../../../utils/context/actions/ListAction';

export default function Task() {


  //global state
  const { task_list } = useContext(StateContext);
  const { task_listDispatch } = useContext(DispatchContext);



  useEffect(() => {

    const listAction = new ListAction(task_listDispatch);
    const token = listAction.getSource()
    try {

      const load = async () => {
        try {

          const res = await listAction.getAll(`task/get-all`)
          console.log("m-list: ", res)

        } catch (e) {
          console.log(e);
        }
      }
      load()
    } catch (e) {
      console.log(e)
    }

    //clean up
    return () => {
      token.cancel()
    }

  }, [task_list.length])

  return (
    <ProtectedPage>
      <Main title="Task Management">
        {/* <h1>coming soon</h1> */}
        <div>
          <br></br>
          <div className='taskList'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  {/* <th>Status</th> */}
                  <th>Description</th>
                  <th>Priority</th>
                  <th>Privacy</th>
                  <th>Assigned by</th>
                  <th>Assigned to</th>
                  <th>Progress</th>
                  <th>Assigned on</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {
                  task_list?.map(item => {
                    return <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.priority}</td>
                      <td>{item.privacy}</td>
                      <td>{item.assigned_to}</td>
                      <td>{item.assigned_by}</td>
                      <td>{item.progress_rate}</td>
                      <td>{item.created_at}</td>
                      <td>{item.deadline}</td>
                    </tr>
                  })
                }



              </tbody>
            </Table>
          </div>
          <Button className="button_color" >Generate report</Button>
        </div>
      </Main>
    </ProtectedPage>
  )
}
