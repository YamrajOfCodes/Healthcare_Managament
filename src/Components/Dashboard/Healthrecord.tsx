import React from 'react'

const Healthrecord = () => {

    const patientRecords = [
        {
          patientId: '12345',
          description: 'Routine Checkup',
          date: '2025-01-12',
          medicine: 'Paracetamol',
          dosage: '500mg',
          frequency: 'Twice a day',
        },
        {
          patientId: '12346',
          description: 'Cough and Cold',
          date: '2025-01-10',
          medicine: 'Cough Syrup',
          dosage: '10ml',
          frequency: 'Every 6 hours',
        },
        {
          patientId: '12347',
          description: 'Fever',
          date: '2025-01-14',
          medicine: 'Ibuprofen',
          dosage: '400mg',
          frequency: 'Once a day',
        },
      ];
      
  return (
    <>
     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Patient Health Records
        </h1>
        <div className="overflow-hidden shadow sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Patient ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Medicine
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Dosage
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientRecords.map((record) => (
                <tr key={record.patientId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.patientId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.medicine}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.dosage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Healthrecord
