matrix = [[1,2,3],[4,5,6],[7,8,9]]

def rotate_the_matrix(matrix):
    for i in range(len(matrix)):
        for j in range(i):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    for i in range(len(matrix)):
        j = 0
        k = len(matrix[i]) - 1
        while j < k:
            matrix[i][j], matrix[i][k] = matrix[i][k], matrix[i][j]
            j+=1
            k-=1
    return matrix


print(rotate_the_matrix(matrix))