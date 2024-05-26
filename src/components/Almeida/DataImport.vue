<script setup>
import { firebaseDb } from '../../plugins/firebaseAlmeida'
import { collection, doc, setDoc } from 'firebase/firestore'
import doctors from '../../master_data/doctors.json'
import nurses from '../../master_data/nurses.json'
import patients from '../../master_data/patients.json'
// import inpatientStatus from '../../master_data/inpatientStatus.json'

defineEmits(['dlgClose'])

const patientsList = [
  'p0007',
  'p0008',
  'p0015',
  'p0016',
  'p0021',
  'p0022',
  'p0023',
  'p0024',
  'p0028',
  'p0029',
  'p0030',
  'p0031',
  'p0032',
  'p0033',
  'p0057',
  'p0058'
]

const meal = ['全て', '残あり', '全て残']

// function
// 患者データ作成
function impInpatients() {
  const docRef = collection(firebaseDb, 'inpatientStatus')
  const today = new Date()
  let date = ''
  // const toDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  patientsList.forEach((item) => {
    date = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    for (let ix = 0; ix < 2; ix++) {
      const regDate = date.toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      const id = item + regDate.replaceAll('/', '')
      const regData = getPatientData(id, item, regDate)
      setInpatients(docRef, regData)
      date.setDate(date.getDate() - 1)
    }
  })
}
function getPatientData(regId, regPatientid, regDate) {
  const patient = {
    id: regId,
    patientId: regPatientid,
    date: regDate,
    tempMo: getTemp(),
    tempEv: getTemp(),
    bloodPresureMoH: Math.floor(getRandom(95, 138)),
    bloodPresureMoL: Math.floor(getRandom(55, 90)),
    bloodPresureEvH: Math.floor(getRandom(95, 138)),
    bloodPresureEvL: Math.floor(getRandom(55, 90)),
    pulseRateMo: Math.floor(getRandom(58, 102)),
    pulseRateEv: Math.floor(getRandom(58, 102)),
    oxygenMo: Math.floor(getRandom(95, 100)),
    oxygenEv: Math.floor(getRandom(95, 100)),
    mealMo: meal[Math.floor(getRandom(0, 2))],
    mealAf: meal[Math.floor(getRandom(0, 2))],
    mealEv: meal[Math.floor(getRandom(0, 2))]
  }
  return patient
}
function getTemp() {
  let base = 36 + getRandom(1.5, 0.5)
  return parseFloat(base.toFixed(1))
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min
}
// 入院患者データImport
// function impInpatients() {
//   const docRef = collection(firebaseDb, 'inpatientStatus')
//   inpatientStatus.forEach((inpatient) => {
//     setInpatients(docRef, inpatient)
//   })
// }
async function setInpatients(docRef, inpatient) {
  await setDoc(doc(docRef, inpatient.id), {
    patientId: inpatient.patientId,
    date: inpatient.date,
    tempMo: inpatient.tempMo,
    tempEv: inpatient.tempEv,
    bloodPresureMoH: inpatient.bloodPresureMoH,
    bloodPresureMoL: inpatient.bloodPresureMoL,
    bloodPresureEvH: inpatient.bloodPresureEvH,
    bloodPresureEvL: inpatient.bloodPresureEvL,
    pulseRateMo: inpatient.pulseRateMo,
    pulseRateEv: inpatient.pulseRateEv,
    oxygenMo: inpatient.oxygenMo,
    oxygenEv: inpatient.oxygenEv,
    mealMo: inpatient.mealMo,
    mealAf: inpatient.mealAf,
    mealEv: inpatient.mealEv
  })
}
// 医師データImport
function impDoctors() {
  const docRef = collection(firebaseDb, 'doctors')
  doctors.forEach((doctor) => {
    setDoctor(docRef, doctor)
  })
}
async function setDoctor(docRef, doctor) {
  await setDoc(doc(docRef, doctor.id), {
    name: doctor.name,
    medical: doctor.medical,
    yobi: doctor.yobi
  })
}

// 看護師データImport
function impNurses() {
  const docRef = collection(firebaseDb, 'nurses')
  nurses.forEach((nurse) => {
    setNurse(docRef, nurse)
  })
}
async function setNurse(docRef, nurse) {
  await setDoc(doc(docRef, nurse.loginid), {
    tanto: nurse.tanto,
    name: nurse.name,
    medical: nurse.medical,
    byoto: nurse.byoto
  })
}
// 患者データImport
function impPatients() {
  const docRef = collection(firebaseDb, 'patients')
  let ix = 0
  patients.forEach((patient) => {
    ++ix
    const id = 'p' + ('000' + ix).slice(-4)
    setPatient(docRef, patient, id)
  })
}
async function setPatient(docRef, patient, id) {
  await setDoc(doc(docRef, id), {
    name: patient.name,
    gender: patient.gender,
    birthday: patient.birthday,
    tel: patient.tel,
    blood: patient.blood,
    medical: patient.medical,
    nyuinFrom: patient.nyuinFrom,
    nyuinTo: patient.nyuinTo,
    roomNo: patient.roomNo,
    byoto: patient.byoto
  })
}
</script>

<template>
  <v-card>
    <v-card-text>データをインポートします。</v-card-text>
    <v-card-actions>
      <v-btn color="update" elevation="2" @click="impDoctors">医師データ</v-btn>
      <v-btn color="update" elevation="2" @click="impNurses">看護師データ</v-btn>
      <v-btn color="update" elevation="2" @click="impPatients">患者データ</v-btn>
      <v-btn color="update" elevation="2" @click="impInpatients">入院患者データ</v-btn>
      <v-btn elevation="2" @click="$emit('dlgClose')">閉じる</v-btn>
    </v-card-actions>
  </v-card>
</template>
