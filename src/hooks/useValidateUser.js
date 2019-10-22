import { useState } from 'react'
import firebase from '../firebase'

export const useValidateUser = email => {
  const [userRD, setUserRD] = useState(false)
  const [userIns, setUserIns] = useState(false)
  const nameRefSub = firebase.database().ref('/').child('subscribers').orderByChild('email').equalTo(email)
  const nameRefPart = firebase.database().ref('/').child('participants').orderByChild('email').equalTo(email)

  nameRefSub.once('value', snapshot => setUserRD(snapshot.exists()))
  nameRefPart.once('value', snapshot => setUserIns(snapshot.exists()))

  return [userRD, userIns]
}
