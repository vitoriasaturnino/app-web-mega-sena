import React, { useEffect } from 'react';
import service from '../services/sena';

export default function Principal(){
  useEffect (
    () => {
      ( async () => {
      const response = await service.get(2500);
      console.log(response);
    }) ()
    }
  )
  return <div>oi</div>
}
