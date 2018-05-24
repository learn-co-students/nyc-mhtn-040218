document.addEventListener('DOMContentLoaded',function() {
    const userId = 1
    const container = document.getElementById('container')
    const newFormIdea = document.getElementById('idea-form')
    const newFormDesc = document.getElementById('new-idea-desc')

    function postNewIdea(ideaDesc) {
        const config = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({description:ideaDesc})
        }
        fetch('http://localhost:3000/project_ideas/',config).then(r=>r.json()).then(project_idea=>{
            reanderIdea(project_idea)
        })
    }

    function handleNewIdea(event) {
        event.preventDefault()
        const newIdeaDesc = newFormDesc.value
        postNewIdea(newIdeaDesc)
    }

    newFormIdea.addEventListener('submit',handleNewIdea)

    function renderComment(comment_data) {
        let idea_container = document.getElementById(`project-id-comments-${comment_data.project_ideas_id}`)
        const comment = `<p>${comment_data.body}</p>`
        idea_container.innerHTML += comment
    }

    function renderComments(comments_data) {
        comments_data.forEach( comment_data => {
            renderComment(comment_data)
        })
    }

    function fetchIdeasComments() {
        fetch('http://localhost:3000/comments').then(r=>r.json()).then( comments_data => {
            renderComments(comments_data)
        })
    }

    function reanderIdea(project_idea_data) {
        let ideaHTML = `<div id='project-id-${project_idea_data.id}'>
                            <h1>${project_idea_data.description}</h1>
                            <div id='project-id-comments-${project_idea_data.id}'></div>
                            <div>
                                <form data-project-id='${project_idea_data.id}'>
                                    <input id='comment-for-project-${project_idea_data.id}'></input>
                                    <button type='submit'>Postive comment about your awesome idea</button>
                                </form>
                            </div>
                        </div>`
            container.innerHTML += ideaHTML
    }

    function renderIdeas(project_ideas_data) {
        project_ideas_data.forEach( project_idea_data => {
            reanderIdea(project_idea_data)
        } )

    }

    function fetchIdeas() {
        fetch('http://localhost:3000/project_ideas/').then(r=>r.json()).then( project_ideas_data => {
            renderIdeas(project_ideas_data)
        } ).then( () => {
            fetchIdeasComments()
        } )
    }

    function postNewComment(comment,projectId) {
        const config = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                project_ideas_id:projectId,
                user_id:userId,
                body:comment
            })
        }
        fetch('http://localhost:3000/comments/',config).then(r=>r.json()).then(comment=>{
            renderComment(comment)
        })
    }

    container.addEventListener('submit',function(event) {
        event.preventDefault()
        if (event.target.tagName === 'FORM') {
            const comment = document.getElementById(`comment-for-project-${event.target.dataset.projectId}`)
            postNewComment(comment.value,parseInt(event.target.dataset.projectId))
        }
    })

    fetchIdeas()
})