numRows = 2


def generate_pascal_triangle(numRows):
    # print(numRows)
    # result = []
    # for i in range(numRows):
    #     row = []
    #     for j in range(i+1):
    #         if j==0 or j==i:
    #             row.append(1)
    #         else:
    #             sum = result[i-1][j-1] + result[i-1][j]
    #             row.append(sum)

    #     result.append(row)
    # return result

    # result = []
    # prev = []
    # for i in range(numRows):
    #     row = [1] * (i + 1)
    #     for j in range(1, i):
    #         row[j] = prev[j - 1] + prev[j]
    #     result.append(row)
    #     prev = row
    # return result

    # only returning the last row, but in this case numRows will be treatead as rowIndex so if get 4 as numRows, then we have to return the 5th row in the pascal's triangle based on 0-based indexing
    row = [1] * (numRows + 1)
    for i in range(1, numRows+1):
        for j in range(i-1, 0, -1):
            row[j] = row[j] + row[j-1]
    return row


print(generate_pascal_triangle(numRows))