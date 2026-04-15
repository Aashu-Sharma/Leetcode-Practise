matrix = [[1,1,1],[1,0,1],[1,1,1]]


def setZeroes(matrix):
    # row = set()
    # col = set()

    # for m in range(len(matrix)):
    #     for n in range(len(matrix[m])):
    #         if matrix[m][n] == 0:
    #             row.add(m)
    #             col.add(n)
    # print(row, col)

    # for (row, column) in pos_of_zeroes:
    #     for i in range(len(matrix[row])):
    #         matrix[row][i] = 0
    #     for j in range(len(matrix)):
    #         matrix[j][column] = 0
    
    # for i in row:
    #     for j in range(len(matrix[i])):
    #         matrix[i][j] = 0
    
    # for i in col:
    #     for j in range(len(matrix)):
    #         matrix[j][i] = 0

    first_row_has_zero = False
    first_col_has_zero = False
    for i in range(len(matrix[0])):
        if matrix[0][i] == 0:
            first_row_has_zero = True
    for i in range(len(matrix)):
        if matrix[i][0] == 0:
            first_col_has_zero = True


    for m in range(len(matrix)):
        for n in range(len(matrix[m])):
            if matrix[m][n] == 0:
                matrix[m][0] = 0
                matrix[0][n] = 0
    print(matrix)
    
    for i in range(1, len(matrix)):
        if matrix[i][0] == 0:
            for j in range(1, len(matrix[i])):
                matrix[i][j] = 0
    print(matrix)

    for i in range(1, len(matrix[0])):
        if matrix[0][i] == 0:
            for j in range(1, len(matrix)):
                matrix[j][i] = 0
    print(matrix)

    if first_row_has_zero:
        for j in range(len(matrix[0])):
            matrix[0][j] = 0
    if first_col_has_zero:
        for j in range(len(matrix)):
            matrix[j][0] = 0

    return matrix

print(setZeroes(matrix))
