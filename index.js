#!/usr/bin/env node
import * as utils from "utils"

const note = process.argv[2]
const newNote = {
    content: note,
    id: Date.now(),
}

