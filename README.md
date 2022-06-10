# file_manager

## Insruction
1. git clone https://github.com/erjigit17/file_manager
2. git checkout dev
3. `npm start` or `node ./src/app -- --username=yourName` 


## You can use \ for path separator on Windows. But I don't test it'

### exit
`.exit` or `.e` or press ctrl+c 
### up
`up` or `cd ..`
### cd
`cd someFolderPath` - change directory to `someFolderPath`<br>
`cd .` going to home directory
### ls
no comments
### cat
`cat test.txt` or `cat someFolder/test.txt`
### add 
`add test.txt` or `add someFolder/test.txt`
### rm
`rn test.txt test.md` or `rn someFolder/test.txt someFolder/test.md`
### cp
`cp test.txt pathToDestinationFolder`
### mv
`mv test.txt pathToDestinationFolder`
### rm
`rm someFolder/test.txt` or `rm test.txt`
### os
`os --EOL`, `os --cpus`, `os --homedir`, `os --username` or `os --architecture`
### hash
`hash path_to_file` Big file will be take time to calculate hash!
### compress
`compress test.txt` compress same directory ->` test.txt.br `<br>
`compress test.txt someFolder`compress to someFolder -> `someFolder/test.txt.br`
### decompress
`decompress test.txt.br` decompress same directory -> `test.txt` <br>
`decompress test.txt.br someFolder` decompress to someFolder -> `someFolder/test.txt`
