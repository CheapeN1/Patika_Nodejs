const fs = require('fs');

const filePath = 'employees.json';

// CREATE: employees.json dosyası oluştur ve içerisine veri ekle
const employee = {
  name: 'Employee 1 Name',
  salary: 2000
};

fs.writeFile(filePath, JSON.stringify(employee, null, 2), (err) => {
  if (err) throw err;
  console.log('employees.json dosyası oluşturuldu ve veri eklendi.');

  // READ: employees.json dosyasındaki veriyi oku
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Dosya içeriği:', data);

    // UPDATE: employees.json dosyasındaki veriyi güncelle
    const updatedEmployee = {
      ...JSON.parse(data),
      name: 'Updated Employee Name',
      salary: 3000
    };

    fs.writeFile(filePath, JSON.stringify(updatedEmployee, null, 2), (err) => {
      if (err) throw err;
      console.log('employees.json dosyası güncellendi.');

      // DELETE: employees.json dosyasını sil
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('employees.json dosyası silindi.');
      });
    });
  });
});
