
git merge <branch> --strategy-option theirs --allow-unrelated-histories

Checkout and create new branch
git checkout -b bkp

Push new branch
git push --set-upstream origin <branch>

Delete
git branch -d <branch>
git branch -D <branch>
git push origin -d <branch>


git reset --hard <target copy>

git push --force