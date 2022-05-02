import React, {useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as Chart} from 'chart.js/auto'
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../actions';



export default function barChart () {

const data = useSelector(state => state.regionData)


const state = {
  labels: data.map((element) => {
    let {period} = element
    return period
  }),
  datasets: [
    {
      label: data[0].region,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,10)',
      borderWidth: 2,
      data: data.map((element) => {
        let {employed} = element
        return employed
      }),
    }
  ]
}

    return (
      <div id='bar'>
      render()
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Filled jobs',
              fontSize:25,
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
}