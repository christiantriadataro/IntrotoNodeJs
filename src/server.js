const interpolate = (html, data) => {
    return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
        return data[placeholder] || 'Data Not Found';
    });
}

const formatNotes = notes => {
    return notes.map(note => {
        return `
        <div> class="note">
        <p>${note.content}</p>
        <div class="tags">
            ${note.tags.map(tag => `<span class="tag">${tag}</span>`)}
        < /div>
        </div>
        `
    }).join("\n")
}