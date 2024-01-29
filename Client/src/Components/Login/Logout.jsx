import React from 'react'

import {useDispatch } from 'react-redux';

import {removeToken} from '../../features/authSlice'

const Logout = () => {

  const dispatch=useDispatch();

  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ () => dispatch(removeToken(null))}>
            Logout
        </button>
    </div>
  )
}

export default Logout