
// Employee Management System (Add, View, Delete Employees)

window.addEventListener('load', () => {

    const form = document.getElementById('addForm');
    const empTable = document.getElementById('employees');
    const empCountOutput = document.getElementById('empCount');

    let count = 0;

    // Focus on Employee ID field on load
    document.getElementById('empId').focus();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Capture form values
        const empId = document.getElementById('empId').value.trim();
        const empName = document.getElementById('empName').value.trim();
        const empExt = document.getElementById('empExt').value.trim();
        const empEmail = document.getElementById('empEmail').value.trim();
        const empDept = document.getElementById('empDept').value.trim();

        // Insert new row
        let row = empTable.insertRow();

        let cellID = row.insertCell();
        let cellName = row.insertCell();
        let cellExt = row.insertCell();
        let cellEmail = row.insertCell();
        let cellDept = row.insertCell();
        let cellDelete = row.insertCell();

        cellID.appendChild(document.createTextNode(empId));
        cellName.appendChild(document.createTextNode(empName));
        cellExt.appendChild(document.createTextNode(empExt));
        cellEmail.appendChild(document.createTextNode(empEmail));
        cellDept.appendChild(document.createTextNode(empDept));

        // Create Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-sm';

        cellDelete.appendChild(deleteBtn);

        // Delete functionality
        deleteBtn.addEventListener('click', function (e) {
            if (confirm('Are you sure you want to delete this employee?')) {
                let rowToDelete = e.target.parentNode.parentNode;
                empTable.deleteRow(rowToDelete.rowIndex);
                count--;
                empCountOutput.value = count;
            }
        });

        // Update employee count
        count++;
        empCountOutput.value = count;

        // Clear form and reset focus
        form.reset();
        document.getElementById('empId').focus();
    });

});
