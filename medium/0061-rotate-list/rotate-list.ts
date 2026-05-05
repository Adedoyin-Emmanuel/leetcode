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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    tail.next = head;

    let stepsToNewTail = length - k - 1;
    let newTail = head;

    for (let i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next!;
    }

    const newHead = newTail.next!;
    newTail.next = null;

    return newHead;
}