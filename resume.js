class Resume {
    constructor(resumeModal) {
        document.getElementById('resume').innerHTML = resumeModal;
    }

    addEducation() {
        const eduInput = ` <input type="text" placeholder="Degree" class="form-control" id="recipient-name">
        <input type="text" placeholder="Institution" class="form-control" id="recipient-name">
        <input type="text" placeholder="CGPA" class="form-control" id="recipient-name">
        <input type="text" placeholder="Pass out year" class="form-control" id="recipient-name">`;
        const Education = document.getElementById('Education');
        Education.innerHTML += eduInput;
    }

    addEmployement() {
        const WorkInput = `<input type="text" placeholder="Company Name" class="form-control" id="recipient-name">
        <input type="text" placeholder="Job Title" class="form-control" id="recipient-name">
        <input type="text" placeholder="Skills" class="form-control" id="recipient-name"></input>`;
        const work = document.getElementById('Work');
        work.innerHTML += WorkInput
    }
    pdf() {
        var doc = new jsPDF();
        var source = window.document.getElementsByClassName('resume');
        doc.fromHTML(
            source[0],
            15,
            15);
        doc.save(source[0])
    }

    clearForm() {
        document.getElementById('info').innerHTML = null;
        document.getElementById('details').innerHTML = null; 
    }

    fetchMessage() {
        userResume.clearForm();
        document.getElementById('create').innerHTML = 'Edit resume';
        let name = document.getElementById('fullname').value;
        let email = document.getElementById('emailno').value;
        let mobile = document.getElementById('mobile').value;
        let address = document.getElementById('address').value;
        let objective = document.getElementById('objective').value;
        let skills = document.getElementById('Skills').value;
        let Work = document.getElementById('Work').getElementsByTagName('input');
        let Education = document.getElementById('Education').getElementsByTagName('input');
        document.getElementById('info').innerHTML += `<div id="name">${name}</div>`;
        document.getElementById('info').innerHTML += `<div>${email}</div>`;
        document.getElementById('info').innerHTML += `<div>${mobile}</div>`;
        document.getElementById('info').innerHTML += `<div>${address}</div>`;
        document.getElementById('details').innerHTML += `<label id="tab">Objective</label><div>${objective}</div>`;
        document.getElementById('details').innerHTML += `<label id="tab">Work</label>`;
        let i = 0;
        while (i < Work.length) {

            document.getElementById('details').innerHTML += `<label id="">${Work[i].placeholder}:</label><span>${Work[i++].value}</span>
            <div><label id="">${Work[i].placeholder}:</label><span>${Work[i++].value}</span></div>
            <div><label id="">${Work[i].placeholder}:</label><span>${Work[i++].value}</span></div>`;
        }
        document.getElementById('details').innerHTML += `<label id="tab">Education</label>`;
        i = 0;
        while (i < Education.length) {
            document.getElementById('details').innerHTML += `<label id="">${Education[i].placeholder}:</label><div>${Education[i++].value}</div>
            <div><label id="">${Education[i].placeholder}:</label><span>${Education[i++].value}</span></div>
            <div><label id="">${Education[i].placeholder}:</label><span>${Education[i++].value}</span></div>
            <div><label id="">${Education[i].placeholder}:</label><span>${Education[i++].value}</span></div>`;
        }
        document.getElementById('details').innerHTML += `<label id="tab">Skills</label><div>${skills}</div>`;
    }
}

const resumeModal = ` <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="create">Create Resume</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Resume</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <input type="text" placeholder="Full Name" required class="form-control" id="fullname" >
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Email" class="form-control" id="emailno">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Address" class="form-control" id="address">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Mobile" class="form-control" id="mobile">
                </div>
                <div class="form-group">
                    <textarea placeholder="Objective or Summary of Qualification" class="form-control"
                        id="objective"></textarea>
                </div>
                <div id='Work' class="form-group">
                        
                    <label for="Work History" class="col-form-label">Work History:</label>
                    <button onclick="userResume.addEmployement()">Add Employment</button>
                    <input type="text" id="companyName" placeholder="Company Name" class="form-control" id="recipient-name">
                    <input type="text" id=" jobTitle" placeholder="Job Title" class="form-control" id="recipient-name">
                    <input type="text" id="skills" placeholder="Skills" class="form-control" id="recipient-name">
                </div>
                <div id= 'Education'class="form-group">
                    
                    <label for="recipient-name" class="col-form-label">Education:</label>
                    <button onclick="userResume.addEducation()">Add Education</button>
                    <input type="text" placeholder="Degree" class="form-control" id="recipient-name">
                    <input type="text" placeholder="Institution" class="form-control" id="recipient-name">
                    <input type="text" placeholder="CGPA" class="form-control" id="recipient-name">
                    <input type="text" placeholder="Pass out year" class="form-control" id="recipient-name">

                </div>
                <div class="form-group">
                    <textarea placeholder="Skills" class="form-control" id="Skills"></textarea>
                </div>
                <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="userResume.fetchMessage()">Save</button>
        </div>
            </form>
        </div>
        
    </div>
</div>

</div>
<button type="button" class="btn btn-primary" onclick="userResume.pdf()">pdf</button>`;

let userResume = new Resume(resumeModal);

