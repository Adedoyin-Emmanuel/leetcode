/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    let slow = head, fast = head, prev = null;

    while(fast && fast.next){
        fast = fast.next.next;

        let next = slow.next;
        slow.next = prev;

        prev = slow;
        slow = next;
    }

    let result = 0;
    let left = prev, right = slow;

    while(left){
        result = Math.max(result, left.val + right.val);

        left = left.next;
        right = right.next;
    }

    return result;
};