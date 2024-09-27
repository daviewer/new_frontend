import { exec } from 'child_process'

const fetchBranches = projectPath => {
  exec(`git -C ${projectPath} branch -a`, (error, stdout, stderr) => {
    if (error) {
      alert(`Error fetching branches: ${stderr}`)
      return
    }
    return stdout
      .split('\n')
      .map(branch => branch.trim())
      .filter(branch => branch && !branch.includes('->'))
  })
}

export const getGitBranches = projectPath => {
  return fetchBranches(projectPath)
}
