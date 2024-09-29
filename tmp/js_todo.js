const todo=[{judul:"Membuat Website",status:"design",tanggal:"2024-09-12"},];function template(judul,status,index){const elementHTML=`
        <li>
            ${judul} | ${status} | 2024-09-29 |
            <button onclick="hapus(${index})">Delete</button>
            <button onclick="ubah(${index})">Edit</button>
        </li>
    `;return elementHTML}function tambah(){const judul=prompt("Masukkan judul todo");const status=prompt("Masukkan status todo");const dataBaru={judul:judul,status:status};todo.push(dataBaru);todo.map((data,index)=>{console.log(data,"Ini index",index);document.getElementById("data").innerHTML+=template(data.judul,data.status,index )})}function ubah(index){alert("Edit | Ini adalah data dengan index ke "+index)}function hapus(index){alert("Delete | Ini adalah data dengan index ke "+index)}