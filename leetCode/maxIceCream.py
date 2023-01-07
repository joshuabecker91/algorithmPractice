

class Solution(object):
    def maxIceCream(self, costs, coins):
        costs = sorted(costs)
        count = 0
        for cost in costs:
            if cost <= coins:
                count += 1
                coins -= cost 
            else:
                break 
        return count
