import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const StudentDepressionData = ({ setData, setLoading }) => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://example.com/student_depression.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const data = Papa.parse(csv, { header: true }).data;
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [setData, setLoading]);

  return <div>Loading...</div>;
};

export default StudentDepressionData;
