

def firstKTimes(arr: list[int], k: int) -> int:
    h = {}
    for i in range(len(arr)):
        x = arr[i]
        if x in h:
            h[x]+=1
            if h[x] >= k:
                print(x)
                return x
        else:
            h[x]=1
    print(-1)
    return -1


# Test Cases
firstKTimes([1, 2, 2, 3, 3], 2), # returns 2
firstKTimes([], 1), # returns -1
firstKTimes([2,4,6,2,4], 2), # returns 2
firstKTimes([7,2,7,4,7,6,2,4], 3) # returns 7

# More Test Cases
firstKTimes([1, 2, 2, 3, 3], 2) # 2
firstKTimes([1, 2, 2, 3, 3], 3) # -1
firstKTimes([], 1) # -1